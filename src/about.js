import React from 'react';

function About(){

    // js code here

    return (
      <body>
      <div class="header">
  
        <div class="inner_header">
  
  
          <a href="home" class="header_img"
            ><img
            src="https://i.imgur.com/gUzP4ml.png" alt='Logo loading'
        /></a>
  
  
          
          <a href="regulations_and_guidelines" class="header_link">Project Analysis</a>
          <a href="fairness_metrics" class="header_link">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link header_page">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>
        
      <div class="content_3">
        <div class="inner_container_simple">
          <h1>
            About
          </h1>
          <h2>
            Welcome to Aithical,
          </h2>
          <p>
            <b>an easy solution to navigate the complex landscape of AI ethics</b>. 
            <br /><br />
            We understand the critical importance of integrating ethics into AI development processes.
            Whether you are a seasoned AI practitioner or just starting your journey, 
            Aithical provides you with the resources you need to build ethical AI solutions.
            <br /><br />         
  
          </p>
          <h2>
            Our mission
          </h2>
          <p>
            At aithical, our mission is to <b> simplify the process of incorporating ethics into AI development </b>. 
            <br /><br />
            By providing a curated collection of regulations, guidelines, and innovative tools, we strive to create 
            a future where AI benefits society while upholding ethical principles and safeguarding human values.
            <br /><br />         
  
          </p>
          <h2>
            Aithical: your trusted AI ethics companion.
          </h2>
          <p class="mob4">
            By leveraging Aithical, you gain access to a wealth of relevant resources that cover 
            a wide range of topics, including data privacy, algorithmic transparency, bias mitigation and more.
            Whether you're a researcher, student, developer, data scientist or business professional, 
            Aithical equips you with <b>relevant resources that can assist you in understanding the legal and 
            ethical frameworks surrounding AI technologies</b>. 
            <br /><br />
            We believe that by equipping AI practitioners with the right knowledge and tools, 
            we can collectively shape a future where AI is used responsibly and ethically. 
            <br /><br />
            Join us on this ethical AI journey and let Aithical be your trusted AI ethics companion.
          </p>
        </div>
      </div>
  
      <div data-loading>
        <span> <span></span> </span>
        <span> <span></span> </span>
      </div>
      <div class="fadeout_container" id="fadeout_container">
        <div class="fadeout"></div>
      </div>
    </body>

    )
}

export default About;