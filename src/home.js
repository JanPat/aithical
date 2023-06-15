import React from 'react';

function Home() {
  return (
    <div>
      <div className="header">
        <div className="inner_header">
          <a href="home" className="header_img">
          <img
              src="https://i.imgur.com/gUzP4ml.png" alt='Logo loading'
          />
          </a>
          <a href="regulations_and_guidelines" className="header_link">Regulations and Guidelines</a>
          <a href="fairness_metrics" className="header_link">Fairness Metrics</a>
          <div className="header_spacer"></div>
          <a href="about" className="header_link">About</a>
          <a href="connect" className="header_link">Connect</a>
        </div>
      </div>

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

      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Aithical. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;