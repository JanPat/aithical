import React from 'react';

function RegulationsGuidelinesViewer(){

  var btn_selected = localStorage.getItem("selected_b");
  var viewer_type = localStorage.getItem("viewer_type");
  var key, information_reg;

  if (viewer_type === "regulation"){
    key = "b" + btn_selected.toString();
  } else if (viewer_type === "guideline") {
    key = "b2" + btn_selected.toString();
  }

  information_reg = JSON.parse(localStorage.getItem(key));
  console.log(information_reg);

  // error handling todo


  document.getElementById("viewer_title").innerHTML = information_reg.title;
  document.getElementById("viewer_description").innerHTML = information_reg.summary;
  document.getElementById("viewer_source").innerHTML = "Source: " + information_reg.source;
  document.getElementById("viewer_link").href = information_reg.link;
  document.getElementById("viewer_excerpt").innerHTML = information_reg.extract.slice(0, 320) + "...";

  

    return (

        <body>
      <div class="header">
  
        <div class="inner_header">
  
  
          <a href="home" class="header_img"
            ><img
              src="https://i.imgur.com/gUzP4ml.png"
          /></a>
  
  
          
          <a href="regulations_and_guidelines" class="header_link header_page">Project Analysis</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>

      <div class="content">
      <div class="viewer_top">
        <div class="back_to_incident" onclick="window.location='/project_analysis'">Back to Regulations and Guidelines</div>
      </div>
      <div class="report_viewer" id="to_download">
        <div class="report_left">
          <h1 id="viewer_title">
          The Vehicle Technology Testing Act
          </h1>
          <p id="viewer_description">
          This Bill amends The Highway Traffic Act, The Insurance Act and The Manitoba Public Insurance Corporation Act to allow for the testing of vehicles with automated driving systems or other new technology.
Under a technology testing permit, a vehicle or a new vehicle technology can be exempted from certain highway traffic law requirements.
A vehicle operated under such a permit may also be exempted from being insured through Manitoba Public Insurance. MPI may recover from the permit holder the costs of property damage and personal injury benefits paid out as a result of an at-fault accident caused by the vehicle.
          
          </p>

          <div class="tags_display" id="tags_display">
            <h3 id="viewer_source">
              Source: The Legislative Assembly of Manitoba
            </h3>
            <p><i>Last Updated: 06-15-2023</i></p>
            
          </div>
        </div>
        <div class="line_r"></div>
        <div class="report_right">
          <div class="report_right_top">
             <h2>
            Excerpt
          </h2>
          <p id="viewer_excerpt">
          <b>Technology testing permits</b>
          <br/>  318.13(1)  The minister may, in accordance with the regulations, issue a technology testing permit to allow a test vehicle to be driven for the purpose of:
          <br/><br/> (a) testing a type of vehicle or vehicle technology; or
          <br/><br/> (b) evaluating the safety or performance of a type of vehicle or vehicle technology.
          <br/><a class="link_reg" id="viewer_link" href="https://web2.gov.mb.ca/bills/42-2/b023e.php">Read More</a>
          </p>
          

          </div>
          <img class = "viewer_img mobp" src="https://i.imgur.com/gUzP4ml.png" alt="logo"/>
        </div>
      </div>
    </div>
      
      

    </body>


    )
}

export default RegulationsGuidelinesViewer;