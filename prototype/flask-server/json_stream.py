from flask import Flask, jsonify
import threading

from darcyai.perceptor.people_perceptor import PeoplePerceptor
from darcyai.input.camera_stream import CameraStream
from darcyai.pipeline import Pipeline
from darcyai.output.json_output_stream import JSONOutputStream

'''
Outputs the number of people currenlty on screen to data.json
'''

# Flask app header
app = Flask(__name__)

# Variable for number of people on the scene
currPeeps = 0

# Instantiate a Camera Stream input stream object
camera = CameraStream(video_device=0, fps=20)

# Output a JSON output stream object accessing the file data.json
json_stream = JSONOutputStream(file_path="data.json")

# Callback function for the handling Rest API output stream data
def perception_completion_callback(pom):
    global currPeeps
    currPeeps = pom.peeps.peopleCount()
    # json_stream.write(jsonify(currPeeps))

# Instantiate the Pipeline object and pass it the Camera Stream object as its input stream source
pipeline = Pipeline(input_stream=camera,
                    perception_completion_callback=perception_completion_callback,)
print("pipeline instantiated")

# # Create a callback function for handling the input that is about to pass to the People Perceptor
def people_input_callback(input_data, pom, config):
    # Just take the frame from the incoming input stream and send it onward - no need to modify the frame
    return input_data.data.copy()

# Create a callback function for handling the "New Person" event from the People Perceptor
# Just print the person ID to the console
def new_person_callback(person_id):
    print("New person: {}".format(person_id))

# Instantiate a People Perceptor
people_ai = PeoplePerceptor()

# Subscribe to the "New Person" event from the People Perceptor and use our callback from above as the handler
people_ai.on("new_person_entered_scene", new_person_callback)

# Add the People Perceptor instance to the Pipeline and use the input callback from above as the input preparation handler
pipeline.add_perceptor("peeps", people_ai, input_callback=people_input_callback)


# @app.route("/data", methods = ['GET', 'POST'])
# def peeps():
#     return jsonify({"peeps" : currPeeps})

# @app.route('/test', methods = ['GET'])
# def test():
#     print("/test")
#     return "Hello World!"

# Start Pipeline and Flask Backend
if __name__ == "__main__":
    # threading.Thread(target=app.run, kwargs={'host':'0.0.0.0','port':3001}).start()
    pipeline.run()
