import time
from flask import Flask, request, redirect, url_for, jsonify, session
from zero_shot import classify_display

from random import randrange

import random



app = Flask(__name__)
app.secret_key = 'aithical_key'




@app.route('/api/projectDescription', methods=['POST'])
def send_input():
    print("IN SEND_INPUT()")
    form_data = request.get_json()# request.form
    print(form_data)
    text_input = form_data['project_description_input']
    print(text_input)

    output_dict = classify_display(text_input)

    # if does not work, save to local storage then redirect

    print(output_dict)
    print(type(output_dict))

    #session['saved_data'] = output_dict

    return output_dict#redirect(url_for('get_output_dict', output_dict=output_dict))

# on return, call other frmo js file




@app.route('/api/output_dict')
def get_output_dict():
    output_dict = {}
    return output_dict
    '''
        # todo: call and feed into classify display
        text_input = request.args.get('text_input')

        print("Test input received (about to feed to model):")
        print(text_input)
        print("----------------")

        while text_input is None:
            time.sleep(5)
            print("waited 5 seconds")

        print("Test input received (about to feed to model):")
        print(text_input)
        print("----------------")
        

        output_dict = classify_display(text_input)
    '''