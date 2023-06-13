import pandas as pd
import torch
from transformers import pipeline
import json
from flask import Flask

'''
source api/venv/bin/activate

in venv, install:

pip install pandas
pip install torch
pip install transformers
pip install flask

pip install flask flask-socketio eventlet

npm install socket.io-client


--

npm install socket.io-client


'''

app = Flask(__name__)

def load_regulations(file_name):
    regulations_df = pd.read_csv(file_name, delimiter=',')
    category_values = regulations_df['Category']
    return regulations_df, category_values

def classify_input(user_input, categories):
    classifier = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
    prediction = classifier(user_input, categories, multi_label=True)
    predicted_category = prediction['labels'][0]
    return predicted_category

def get_matching_regulations(regulations_df, predicted_category):
    matching_regulations = regulations_df[regulations_df['Category'] == predicted_category]
    return matching_regulations

def extract_regulation_and_guideline(matching_regulations):
    regulation = None
    guideline = None
    
    for _, row in matching_regulations.iterrows():
        reg_title = row['Title']
        reg_type = row['Type']
        reg_summary = row['Summary']
        reg_extract = row['Extract']
        reg_source = row['Entity']
        reg_url = row['Official source']

        if reg_type == 'Regulation':
            regulation = (reg_title, reg_summary, reg_extract, reg_source, reg_url)
        elif reg_type == 'Guideline':
            guideline = (reg_title, reg_summary, reg_extract, reg_source, reg_url)
    return regulation, guideline

def display_results(predicted_category, regulation, guideline):
    output_dict = {
        "regulations": [],
        "guidelines": []
    }

    if regulation:
        reg_title, reg_summary, reg_extract, reg_source, reg_url = regulation
        regulation_dict = {
            "title": reg_title,
            "summary": reg_summary,
            "extract": reg_extract,
            "source": reg_source,
            "link": reg_url  
        }
        output_dict["regulations"].append(regulation_dict)

    if guideline:
        guid_title, guid_summary, guid_extract, guid_source, guid_url = guideline
        guideline_dict = {
            "title": guid_title,
            "summary": guid_summary,
            "extract": guid_extract,
            "source": guid_source,
            "link": guid_url 
        }
        output_dict["guidelines"].append(guideline_dict)

    json_output = json.dumps(output_dict, indent=4)
    print(json_output)

    return json_output

def classify_display(user_input):
    file_name = 'Summary-Regulations-Guidelines.csv'
    #user_input = input("Enter your text: ")
    #user_input = "vroom vroom big cars on the road cars on the streets"
    categories = ['Autonomous Vehicle', 'Education', 'Healthcare', 'Agriculture', 'Environment', 'Finance']

    regulations_df, category_values = load_regulations(file_name)

    predicted_category = classify_input(user_input, categories)

    matching_regulations = get_matching_regulations(regulations_df, predicted_category)

    regulation, guideline = extract_regulation_and_guideline(matching_regulations)


    return display_results(predicted_category, regulation, guideline)