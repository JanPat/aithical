import time
from flask import Flask
#from zero_shot import classify_display
app = Flask(__name__)

@app.route('/api/time')
def get_current_time():
    return {'time': time.time()}

#@app.route('/project-view')
'''
def get_classification():
    return classify_display().update({'chicken' : 'wing'})
'''

# main() -- put all other functions in the backend folder - also rename main()

