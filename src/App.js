import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {



  // create this so that it does it for x containers
  
  const [title_1, set_title] = useState(0);
  const [summary_1, set_summary] = useState(0);
  console.log(title_1)
  console.log(summary_1)

  useEffect(() => {
    fetch('/api/output_dict')
    .then(response => response.json())
    .then(data => {
      set_title(data.title);
      set_summary(data.summary);
    });
  }, []);





  return (

    <body>
    <div class="header">

      <div class="inner_header">


        <a href="index.html" class="header_img"
          ><img
            src="https://live.staticflickr.com/65535/50142685812_4b909c1871_o.png"
        /></a>


        <a href="submit.html" class="header_link">Submit</a>
        <a href="incidents.html" class="header_link header_page">Incidents</a>
        <a href="statistics.html" class="header_link">Statistics</a>
        <a href="support.html" class="donate_btn">Support</a>
        <div class="header_spacer"></div>
        <a href="about.html" class="header_link">About</a>
        <a href="connect.html" class="header_link">Connect</a>
      </div>

      <div class="menu_header">
        <a href="index.html" class="header_img"
          ><img
            src="https://live.staticflickr.com/65535/50142685812_4b909c1871_o.png"
        /></a>
        <img
          onclick="show_function()"
          class="hamburger"
          src="https://live.staticflickr.com/65535/50167835143_4d3b56d21c_o.png"
        />
      </div>
    </div>
    <div class="menu_dropdown" id="menu_dropdown">
      <a href="index.html">
        <h1>
          Home
        </h1>
      </a>
      <a href="submit.html">
        <h1>
          Submit
        </h1>
      </a>
      <a href="incidents.html">
        <h1>
          Incidents
        </h1>
      </a>
      <a href="statistics.html">
        <h1>
          Statistics
        </h1>
      </a>
      <a href="about.html">
        <h1>
          About
        </h1>
      </a>
      <a href="connect.html">
        <h1>
          Connect
        </h1>
      </a>
      <a href="support.html">
        <h1>
          Support
        </h1>
      </a>

      <div class="mob0"></div>
    </div>
    <div class="content">
      <div class="incidents_top">
        <h1 class="top_title">
          View Incidents
        </h1>
        <div class="top_search">
          <div class="inner_form search_form">
            <input
              type="text"
              id="incident_search"
              placeholder="Search through our database"
              onkeydown="if (event.keyCode == 13)
                        document.getElementById('search_button').click()"
            />
            <div id="search_button" onclick="search_incidents();">
              Search
            </div>
          </div>
        </div>
      </div>
      <div class="incidents_container" id="in_container">
        <div class="incidents_item">
            <h2>{title_1}</h2>
            <p>{summary_1}</p>
            <div class="btn_row">
            <div class="read_btns" id="b_id">Read Report</div>
            </div>
        </div>

      </div>
      <div class="see_more_div mob6" onclick="show_report_grid(6, -1)">
        See More Reports
      </div>
    </div>
    <div data-loading>
      <h2>janvi</h2>
      <span> <span></span> </span>
      <span> <span></span> </span>
    </div>
    <div class="fadeout_container" id="fadeout_container">
      <div class="fadeout"></div>
    </div>
  </body>

  );
}

export default App;
