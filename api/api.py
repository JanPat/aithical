import time
from flask import Flask
from zero_shot import classify_display
app = Flask(__name__)

@app.route('/api/output_dict')
def get_output_dict():
    return classify_display()



# main() -- put all other functions in the backend folder - also rename main()

