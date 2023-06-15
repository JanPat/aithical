import React, { useState, useEffect } from 'react';
import ProjectAnalysis from "./project_analysis.js" ;
import { useNavigate } from 'react-router-dom';

function RegulationsGuidelines() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // get input
    const input = document.getElementById('project_description_input').value;
    localStorage.setItem('project_description_input', input);
    localStorage.setItem('project_description_title', document.getElementById('project_title').value);
    const formData = { project_description_input: input };

    console.log("From Form:");
    console.log(input);
    console.log("Sending request now");

    

    // request

    fetch('/api/projectDescription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Model Output Dict:")
        console.log(data)
        localStorage.setItem('model_output_dict', JSON.stringify(data));
        //ProjectAnalysis();
        navigate('/project_analysis');
        console.log("done, redirecting2")
      })
      .catch((error) => {
        // Handle any errors
      });

      //window.open("project_analysis");
      


     // method="POST"

  };



  return (
    <body>
      <div class="header">
        <div class="inner_header">
          <a href="home" class="header_img">
            <img
              src="https://wp.uthscsa.edu/mikiten-graduate-symposium/wp-content/uploads/sites/158/2019/02/placeholder.com-logo3.jpg"
              alt="logo" />
          </a>
          <a href="regulations_and_guidelines" class="header_link header_page">Regulations and Guidelines</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="contact" class="header_link">Contact</a>
        </div>
      </div>
      <div class="content">
        <div class="main_submit">
          <div class="incident_form_container">
            <h1 class="wage_title">
              Project Analysis - Input Form
            </h1>
            <p class="form_description">
              Enter your project title and your project description, and then click on the Submit button.
              AIthical will redirect you to a new page where you will be able to see Canadian
              legal regulations and guidelines that are relevant to your project.
              To learn more about how AIthical works, read our <a href="about">About</a> section.
            </p>
            <form id="incident_form" onSubmit={handleSubmit}>
              <div class="wage_sub">
                <h2>
                  Enter your Project Information:
                </h2>
              </div>
              <div class="wage_inputs">
                <div class="wage_spacer"></div>
                <div class="wage_group wage_full">
                  <h3>
                    Project Title
                  </h3>
                  <input type="text" id="project_title" name="company" placeholder="Enter your Project Title" />
                </div>
                <div class="wage_spacer"></div>
                <div class="wage_group wage_full">
                  <h3>
                    Project Description
                  </h3>
                    <fieldset>
                      <label>
                        <textarea
                          id="project_description_input"
                          name="project_description_input"
                          class="description_input"
                          rows="4"
                          cols="1"
                          placeholder="Project Description">
                        </textarea>
                      </label>
                    </fieldset>
                    <div class="wage_group wage_full">
                      <div class="align_submit">
                        <button id="description_submit" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </body>
  )
}


export default RegulationsGuidelines;