import pandas as pd
import torch
from transformers import pipeline
import json
from flask import Flask

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
        reg_issuer = row['Entity']
        reg_url = row['Official source']

        if reg_type == 'Regulation':
            regulation = (reg_title, reg_summary, reg_extract, reg_issuer, reg_url)
        elif reg_type == 'Guideline':
            guideline = (reg_title, reg_summary, reg_extract, reg_issuer, reg_url)

    return regulation, guideline

def display_results(predicted_category, regulation, guideline):
    output_dict = {
        "regulations": [],
        "guidelines": []
    }

    if regulation:
        reg_title, reg_summary, reg_extract, reg_issuer, reg_url = regulation
        regulation_dict = {
            "title": reg_title,
            "summary": reg_summary,
            "extract": reg_extract,
            "issuer": reg_issuer,
            "link": reg_url  
        }
        output_dict["regulations"].append(regulation_dict)

    if guideline:
        guid_title, guid_summary, guid_extract, guid_issuer, guid_url = guideline
        guideline_dict = {
            "title": guid_title,
            "summary": guid_summary,
            "extract": guid_extract,
            "issuer": guid_issuer,
            "link": guid_url 
        }
        output_dict["guidelines"].append(guideline_dict)

    json_output = json.dumps(output_dict, indent=4)
    print(json_output)

@app.route("/project-view")
def main():
    file_name = 'Summary-Regulations-Guidelines.csv'
    #user_input = input("Enter your text: ")
    user_input = "big farms with huge melons"
    categories = ['Autonomous Vehicle', 'Education', 'Healthcare', 'Agriculture', 'Environment', 'Finance']

    regulations_df, category_values = load_regulations(file_name)
    predicted_category = classify_input(user_input, categories)
    matching_regulations = get_matching_regulations(regulations_df, predicted_category)
    regulation, guideline = extract_regulation_and_guideline(matching_regulations)
    display_results(predicted_category, regulation, guideline)
    return {'category' : predicted_category, 'regulation' :
            {
                'title' : "regulation_1",
                'summary' : "regulation_1_description",
                'link' : "regulation_1_link",
                'source': "regulation_1_source"
            }, 'guideline' : guideline}
