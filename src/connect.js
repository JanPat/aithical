import React from 'react';
import './connect.css';
function Contact(){

    // js code here

    return (

        <body>
        <div class="header">
          <div class="inner_header">
          <a href="home" class="header_img"
            ><img
              src="https://wp.uthscsa.edu/mikiten-graduate-symposium/wp-content/uploads/sites/158/2019/02/placeholder.com-logo3.jpg"
          />
          </a>
            <a href="regulations_and_guidelines" class="header_link header_page">Regulations and Guidelines</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="contact" class="header_link">Contact</a>
          </div>
        </div>
        <div class="contentt">
          <div class="contact_box">
            <div class="title">
              <h1>Contact us</h1>
            </div>
            <div class="container">
              <div class="card" >
              <div class="inner" >
                <h2>Talk to a member of our team</h2>
                <p> We'd love to answer to your questions. Email us! </p>
                <div class="email" > 
                  < a href="mailto: aithical@gmail.com" >Send email</a>
                </div>
              </div>
              </div>
              <div class="card" >
              <h2>Adress</h2>
              <p> Visit us!</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.986224025036!2d-73.61645282327585!3d45.530482771075114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9197292bf8945%3A0x612dab246d9724f9!2s6666%20Rue%20Saint-Urbain%2C%20Montr%C3%A9al%2C%20QC%20H2S%203H1!5e0!3m2!1sfr!2sca!4v1686704747278!5m2!1sfr!2sca" ></iframe>
              
              </div>
            </div>
          </div>
        </div>
      </body>

    )
}

export default Contact;