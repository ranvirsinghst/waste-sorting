from flask import Flask, jsonify
from json import dumps
import threading
import cv2
import os
import pathlib

from darcyai.perceptor.object_detection_perceptor import ObjectDetectionPerceptor
from darcyai.perceptor.processor import Processor
from darcyai.input.camera_stream import CameraStream
from darcyai.pipeline import Pipeline

# Flask app header
app = Flask(__name__)

# Variable for object waste type
currObj = ''
currConf = 0

# Instantiate a Camera Stream input stream object
camera = CameraStream(video_device=0, fps=20)

# Callback function for the handling Rest API output stream data
def perception_completion_callback(pom):
    global currObj
    global currConf
    for object in pom.object_detection:
        currObj = object.name
        currConf = object.confidence * 100

def perceptor_input_callback(input_data, pom, config):
    return input_data.data

# Instantiate the Pipeline object and pass it the Camera Stream object as its input stream source
pipeline = Pipeline(input_stream=camera,
                    perception_completion_callback=perception_completion_callback,)
print("pipeline instantiated")

# Create a callback function for handling the input that is about to pass to the Waste Perceptor
def waste_input_callback(input_data, pom, config):
    # Just take the frame from the incoming input stream and send it onward - no need to modify the frame
    return input_data.data.copy()

script_dir = pathlib.Path(__file__).parent.absolute()
# Determine models and labeling files for usage
coral_model_file = os.path.join(script_dir, "", "waste_det_v4.tflite")
coral_labels_file = os.path.join(script_dir, "", "waste_labels.txt")
cpu_model_file = os.path.join(script_dir, "", "waste_det_v4.tflite")
cpu_labels_file = os.path.join(script_dir, "", "waste_labels.txt")

# Instantiate an object detection perceptor
object_detection = ObjectDetectionPerceptor(processor_preference={
                                                Processor.CORAL_EDGE_TPU: {
                                                    "model_path": coral_model_file,
                                                    "labels_file": coral_labels_file,
                                                },
                                                Processor.CPU: {
                                                    "model_path": cpu_model_file,
                                                    "labels_file": cpu_labels_file,
                                                },
                                            },
                                            threshold=0.5,
                                            quantized=False,
                                            num_cpu_threads=2)

# Add object detection perceptor to the pipeline
pipeline.add_perceptor("object_detection", object_detection, accelerator_idx=0, input_callback=perceptor_input_callback)

# route for current objec type and confidence
@app.route("/data", methods = ['GET', 'POST'])
def peeps():
    return {"obj" : currObj, "conf" : str(currConf)[:2]}

# Start Pipeline and Flask Backend
if __name__ == "__main__":
    threading.Thread(target=app.run, kwargs={'host':'0.0.0.0','port':3001}).start()
    pipeline.run()
