import time
from flask import Flask, request, redirect, url_for, jsonify, session
from zero_shot import classify_display

from random import randrange

import random



app = Flask(__name__)
app.secret_key = 'aithical_key'

@app.route('/api/projectDescription', methods=['POST'])
def send_input():
    form_data = request.get_json()# request.form
    text_input = form_data['project_description_input']
    output_dict = classify_display(text_input)
    #print(output_dict)
    #print(type(output_dict))
    return output_dict


'''
source api/venv/bin/activate

in venv, install:

pip install pandas
pip install torch
pip install transformers
pip install flask

pip install flask flask-socketio eventlet (do not need))

npm install socket.io-client (do not need)


--

npm install socket.io-client (do not need))


'''