from flask import Flask, request, jsonify
import requests
# import faceRecognition


# Flask app header
app = Flask(__name__)

# @app.route('/')
# def dynamic_page():
#     return your_module.your_function_in_the_module()

@app.route('/peeps', methods = ['GET', 'POST'])
def peeps():
    # return jsonify(faceRecognition.getPeeps())
    return jsonify(5)

@app.route('/' , methods = ['GET', 'POST'])
def home():
    return { "list" : ["item1", "item2", "item3"]}

@app.route('/hello/', methods=['GET', 'POST'])
def welcome():
    return "Hello World!"

@app.route('/test/', methods=['GET', 'POST'])
def test():
    return "Hello test!"

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=105)