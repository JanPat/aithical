import React from 'react';

function Home() {

  /*
   <div className="content_3">
        <div className="inner_container_simple">
          <h1>Welcome to Aithical</h1>
          <p>
          We are here to bridge the gap between cutting-edge AI technology and ethical decision-making.
          </p>
          <p className="mob4">
            <b>Get recommendations for relevant resources and tools to ensure fair and ethical application of your AI/ML models.</b>
            <br /><br />
            Let Aithical help you build an ethical AI solution.
          </p>
          <button className="get_started_btn">Get Started</button>
        </div>
      </div>

      ethics

      fairness
  
  */


  return (
    <div>
      <div className="header">
        <div className="inner_header">
          <a href="home" className="header_img">
          <img
              src="https://i.imgur.com/gUzP4ml.png" alt='Logo loading'
          />
          </a>
          <a href="regulations_and_guidelines" className="header_link">Project Analysis</a>
          <a href="fairness_metrics" className="header_link">Fairness Metrics</a>
          <div className="header_spacer"></div>
          <a href="about" className="header_link">About</a>
          <a href="connect" className="header_link">Connect</a>
        </div>
      </div>

      <div class="content">


      <div class="home_txt white main_header_big">
        <h1 class="main_title">
          <span id="green_logo">ai</span>thical
        </h1>
        <h2 class="main_subtitle">
          At <span id="green_logo">ai</span>thical we recommend relevant resources and tools to AI practitioners to ensure fair and ethical application of AI/ML models.
        </h2>

      </div>


      <div class="home_txt yellow">
        <h1>
        We are here to bridge the gap between cutting-edge AI technology and ethical decision-making.
        </h1>
        <p>
        Whether you are a beginner or expert AI practitioner, <span id="green_logo">ai</span>thical can act
        as a centralized tool to find resources for your fair and ethical AI projects.

        </p>
      </div>

      <div class="home_txt white">
        <h1>
          our features
        </h1>
        <p>
          blablabla
        </p>
        <p>
          blablabla
        </p>
        <div class="home_btn_container">
          <div>
            <h3>
              Project Analysis
            </h3>
            <img
              src="https://live.staticflickr.com/65535/50142406526_61df9590d4_o.png"
            />
          </div>
          <div>
            <h3>
              Fairness Metrics
            </h3>
            <img
              src="https://live.staticflickr.com/65535/50153866971_4ba58b6bd2_o.png"
            />
          </div>
        </div>
      </div>

      <div class="home_txt yellow">
        <h1>
          About <span id="green_logo">ai</span>thical
        </h1>
        <p>
        To learn more about how <span id="green_logo">ai</span>thical works, read our <a id="w_link" href="about">About</a> section.
        On this page you will be able to view information about the model and other technologies we used to develop this project.
        </p>
      </div>
    </div>

     

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Aithical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;