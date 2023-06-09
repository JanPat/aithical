import time
import json
from flask import Flask, request
#from flask_cors import CORS


app = Flask(__name__)
#CORS(app)

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/api/projectDescription', methods=['POST'])
def send_input():
    form_data = request.get_json()
    if form_data == "a":
        return {'yes': 'a'}
    else:
        return {'no': 'b'}
    
# main() -- put all other functions in the backend folder - also rename main()


    
