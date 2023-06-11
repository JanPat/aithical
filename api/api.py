import time
from flask import Flask, request, redirect, url_for, jsonify
from zero_shot import classify_display

from random import randrange

import random



app = Flask(__name__)

@app.route('/api/projectDescription', methods=['POST'])
def send_input():
    form_data = request.get_json()

    return redirect(url_for('get_output_dict'))


@app.route('/api/output_dict')
def get_output_dict():

    output_dict = classify_display()


    return output_dict
