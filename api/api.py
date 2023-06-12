import time
from flask import Flask, request, redirect, url_for, jsonify
from zero_shot import classify_display

from random import randrange

import random



app = Flask(__name__)

@app.route('/api/projectDescription', methods=['POST'])
def send_input():
    print("send input")
    form_data = request.get_json()# request.form
    print(form_data)
    text_input = form_data['project_description_input']
    print(text_input)

    return redirect(url_for('get_output_dict', text_input=text_input))


@app.route('/api/output_dict')
def get_output_dict():

    # todo: call and feed into classify display
    text_input = request.args.get('text_input')

    if text_input is None:
        text_input = "This is an automated car project."

    print("")
    print(text_input)
    print("JANVI")

    output_dict = classify_display(text_input)

    

    return output_dict
