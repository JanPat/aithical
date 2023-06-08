import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/output_dict')
def get_current_time():
    return {
        'title': "Sample Title",
        'summary': "sample summary bla bla bla bla"
        }

# main() -- put all other functions in the backend folder - also rename main()

