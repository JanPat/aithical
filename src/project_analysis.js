import React, { useState, useEffect } from 'react';

function ProjectAnalysis(){

    const [title_1, set_title] = useState(0);
    const [summary_1, set_summary] = useState(0);

    var data = JSON.parse(localStorage.getItem('model_output_dict'));

    console.log("new page");

    let number_regulations, reports_shuffled;
    let number_guidelines, reports_shuffled2;

    number_regulations = data.regulations.length;
    reports_shuffled = data.regulations;

    number_guidelines = data.guidelines.length;
    reports_shuffled2 = data.guidelines;

    console.log("# Regulations:")
    console.log(number_regulations);
    console.log("# Guidelines:")
    console.log(number_guidelines);

    var incidents_container = document.getElementById("in_container");
    incidents_container.innerHTML = "";

    var guidelines_container = document.getElementById("g_container");
    guidelines_container.innerHTML = "";


        
    if (number_regulations !== 0){
        for (var i = 0; i < number_regulations; i++) {

      
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
      }

      if (number_guidelines !== 0){
        for (var i = 0; i < number_guidelines; i++) {

      
          var incidents_item = document.createElement("div");
          incidents_item.classList.add("incidents_item");
      
          var header = document.createElement("h2");
      
          var header_txt = document.createTextNode(reports_shuffled2[i].title);
      
          header.appendChild(header_txt);
      
          var char_length = Math.round(
            0.00015085686700459 * (window.innerWidth * window.innerHeight) + 148.6
          );
          var shortened =
          reports_shuffled2[i].summary;//.slice(0, char_length) + "...";
      
          var paragraph = document.createElement("p");
          var paragraph_txt = document.createTextNode(shortened);
          paragraph.appendChild(paragraph_txt);
      
          var btn_row = document.createElement("div");
          btn_row.classList.add("btn_row");
          var btn_r = document.createElement("div");
          btn_r.id = "b2" + i.toString();
          btn_row.appendChild(btn_r);
      
          incidents_item.appendChild(header);
          incidents_item.appendChild(paragraph);
          incidents_item.appendChild(btn_row);
      
          guidelines_container.appendChild(incidents_item);
      
          var b_id = "b2" + i.toString();
      
          var identification = reports_shuffled[i].incident_id;
          var to_replace = `<div class="read_btns" id="b2_id" onclick="set_incident(${identification})">Read More</div>`;
          document.getElementById(b_id).innerHTML = to_replace;
        }
      }


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
        </div>
        <div class="incidents_container" id="in_container">
  
  
        </div>

        <div class="incidents_container" id="g_container">

        </div>

      </div>

    </body>
    )
  }
  

  export default ProjectAnalysis;