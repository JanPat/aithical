import time
from flask import Flask

app = Flask(__name__)

@app.route('/api/output_dict')
def get_output_dict():

    output_dict = {
        'regulations': [
            {
                'title' : "regulation_1",
                'summary' : "regulation_1_description",
                'link' : "regulation_1_link",
                'source': "regulation_1_source"
            },
            {
                'title' : "regulation_2",
                'summary' : "regulation_2_description",
                'link' : "regulation_2_link",
                'source': "regulation_2_source"
            },
            {
                'title' : "regulation_3",
                'summary' : "regulation_3_description",
                'link' : "regulation_3_link",
                'source': "regulation_3_source"
            }
        ],
        'guidelines': [

        ]
    }
    
   

    return output_dict


# main() -- put all other functions in the backend folder - also rename main()

