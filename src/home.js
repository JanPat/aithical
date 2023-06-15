import React from 'react';

function Home() {
  return (
    <div>
      <div className="header">
        <div className="inner_header">
          <a href="home" className="header_img">
            <img src="https://wp.uthscsa.edu/mikiten-graduate-symposium/wp-content/uploads/sites/158/2019/02/placeholder.com-logo3.jpg" alt="Logo" />
          </a>
          <a href="regulations_and_guidelines" className="header_link header_page">Regulations and Guidelines</a>
          <a href="_metrics" className="header_link">Fairness Metrics</a>
          <div className="header_spacer"></div>
          <a href="about" className="header_link">About</a>
          <a href="contact" className="header_link">Contact</a>
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