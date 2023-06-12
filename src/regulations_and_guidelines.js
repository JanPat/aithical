import React, { useState, useEffect } from 'react';

function ProjectAnalysis(){

  // use sockets to do update or split into 2 pages

    const [title_1, set_title] = useState(0);
    const [summary_1, set_summary] = useState(0);
    console.log(title_1)
    console.log(summary_1)
  
    useEffect(() => {
      fetch('/api/output_dict')
      .then(response => response.json())
      .then(data => {
  
        let number_regulations, reports_shuffled;
  
        number_regulations = data.regulations.length
  
        reports_shuffled = data.regulations
  
        var incidents_container = document.getElementById("in_container");
        incidents_container.innerHTML = "";
  
        for (var i = 0; i < number_regulations; i++) {
          /*
            for each report from the start of reports_shuffled
            to the grid_size, make incidents_item with each
            story and a button that leads them to see the full
            thing
          */
      
          var incidents_item = document.createElement("div");
          incidents_item.classList.add("incidents_item");
      
          var header = document.createElement("h2");
      
          var header_txt = document.createTextNode(reports_shuffled[i].title);
      
          header.appendChild(header_txt);
      
          var char_length = Math.round(
            0.00015085686700459 * (window.innerWidth * window.innerHeight) + 148.6
          );
          var shortened =
            reports_shuffled[i].summary;//.slice(0, char_length) + "...";
      
          var paragraph = document.createElement("p");
          var paragraph_txt = document.createTextNode(shortened);
          paragraph.appendChild(paragraph_txt);
      
          var btn_row = document.createElement("div");
          btn_row.classList.add("btn_row");
          var btn_r = document.createElement("div");
          btn_r.id = "b" + i.toString();
          btn_row.appendChild(btn_r);
      
          incidents_item.appendChild(header);
          incidents_item.appendChild(paragraph);
          incidents_item.appendChild(btn_row);
      
          incidents_container.appendChild(incidents_item);
      
          var b_id = "b" + i.toString();
      
          var identification = reports_shuffled[i].incident_id;
          var to_replace = `<div class="read_btns" id="b_id" onclick="set_incident(${identification})">Read More</div>`;
          document.getElementById(b_id).innerHTML = to_replace;
        }
  
  
        console.log(number_regulations)
  
  
        set_title(data.regulations[0].title);
        set_summary(data.regulations[0].summary);
      });
    }, []);

    const handleSubmit = (event) => {
      event.preventDefault();
    
      const input = document.getElementById('project_description_input').value;
      const formData = { project_description_input: input };
    
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
        })
        .catch((error) => {
          // Handle any errors
        });
    };


    return (
      <body>
      <div class="header">
  
        <div class="inner_header">
  
  
          <a href="home" class="header_img"
            ><img
              src="https://wp.uthscsa.edu/mikiten-graduate-symposium/wp-content/uploads/sites/158/2019/02/placeholder.com-logo3.jpg"
          /></a>
  
  
          
          <a href="regulations_and_guidelines" class="header_link header_page">Regulations and Guidelines</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>
      
      <div class="content">
        <div class="incidents_top">
          <h1 class="top_title">
            Project Analysis
          </h1>
          <div class="top_search">
            <div class="inner_form search_form">
  
              
            <form method="POST" onSubmit={handleSubmit} >
              <fieldset>
                <label>
                  <textarea
                    id="project_description_input"
                    name="project_description_input"
                    rows="4"
                    cols="1"
                    placeholder="Project Description">
                  </textarea>
                </label>
              </fieldset>
              <button type="submit" id="description_submit">Submit Description</button>
            </form>

            </div>
          </div>
        </div>
        <div class="incidents_container" id="in_container">
  
  
        </div>

      </div>

    </body>
    )
  }
  

  export default ProjectAnalysis;