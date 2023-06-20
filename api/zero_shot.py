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
    regulations = []
    guidelines = []
    threshold = 2
    
    for _, row in matching_regulations.iterrows():
        reg_title = row['Title']
        reg_type = row['Type']
        reg_summary = row['Summary']
        reg_extract = row['Extract']
        reg_source = row['Entity']
        reg_url = row['Official source']

        if reg_type == 'Regulation':
            regulation = {
                "title": reg_title,
                "summary": reg_summary,
                "extract": reg_extract,
                "source": reg_source,
                "link": reg_url  
            }
            regulations.append(regulation)
        elif reg_type == 'Guideline':
            guideline = {
                "title": reg_title,
                "summary": reg_summary,
                "extract": reg_extract,
                "source": reg_source,
                "link": reg_url  
            }
            guidelines.append(guideline)
    return regulations, guidelines

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
    return json_output

def classify_display(user_input):

    print("*--*--*--*--*--*--*--*--*--*--*--*--*")
    print("Starting to classify user input:", user_input)

    file_name = 'Summary-Regulations-Guidelines.csv'
    categories = ['Autonomous Vehicle', 'Education', 'Healthcare', 'Agriculture', 'Finance']

    regulations_df, category_values = load_regulations(file_name)
    print("Regulations loaded and mapped to categories")

    predicted_category = classify_input(user_input, categories)
    print("Predicted Category:", predicted_category)

    matching_regulations = get_matching_regulations(regulations_df, predicted_category)
    regulations, guidelines = extract_regulation_and_guideline(matching_regulations)
    print("Creating Output Dictionary from matched regulations and guidelines:")

    output_dict = {
        "regulations": regulations,
        "guidelines": guidelines
    }

    print("Number of Regulations:", len(output_dict["regulations"]))
    print("Number of Guidelines:", len(output_dict["guidelines"]))
    print("*--*--*--*--*--*--*--*--*--*--*--*--*")

    return output_dict
