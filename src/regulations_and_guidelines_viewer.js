import React from 'react';

function RegulationsGuidelinesViewer() {

  const set_information = () => {

  var btn_selected = localStorage.getItem("selected_b");
  var viewer_type = localStorage.getItem("viewer_type");
  var key, information_reg;

  if (viewer_type === "regulation") {
    key = "b" + btn_selected.toString();
  } else if (viewer_type === "guideline") {
    key = "b2" + btn_selected.toString();
  }

  information_reg = JSON.parse(localStorage.getItem(key));

  var el1 = document.getElementById("viewer_title");
  if (el1 !== null) {
    el1.textContent = information_reg.title;
  } else { console.log("innerHTML error") };

  var el2 = document.getElementById("viewer_description");
  if (el2 !== null) {
    el2.textContent = information_reg.summary;
  } else { console.log("innerHTML error") };

  var el3 = document.getElementById("viewer_source");
  if (el3 !== null) {
    el3.textContent = "Source: " + information_reg.source;
  } else { console.log("innerHTML error") };

  var el4 = document.getElementById("viewer_excerpt");
  if (el4 !== null) {
    el4.textContent = information_reg.extract.slice(0, 320) + "...";
  } else { console.log("innerHTML error") };

  var el5 = document.getElementById("viewer_link");
  if (el5 !== null) {
    el5.href = information_reg.link;
  } else { console.log("innerHTML error") };

}

  return (

    <body onLoad={set_information}>
      <div class="header">
        <div class="inner_header">
          <a href="home" class="header_img"><img src="https://i.imgur.com/gUzP4ml.png" alt="logo" /></a>
          <a href="regulations_and_guidelines" class="header_link header_page">Project Analysis</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>

      <div class="content">
        <div class="viewer_top">
          <div class="back_to_incident"><a id="no_underline" href="project_analysis">Back to Regulations and Guidelines</a></div>
        </div>
        <div class="report_viewer" id="to_download">
          <div class="report_left">
            <h1 id="viewer_title">
            </h1>
            <p id="viewer_description">
            </p>
            <div class="tags_display" id="tags_display">
              <h3 id="viewer_source">
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
              </p>
              <br /><a class="link_reg" id="viewer_link" href="https://web2.gov.mb.ca/bills/42-2/b023e.php">Read More</a>
            </div>
            <img class="viewer_img mobp" src="https://i.imgur.com/gUzP4ml.png" alt="logo" />
          </div>
        </div>
      </div>
    </body>
  )
}

export default RegulationsGuidelinesViewer;