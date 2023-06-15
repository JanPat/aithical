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
  
  
          
          <a href="regulations_and_guidelines" class="header_link">Regulations and Guidelines</a>
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
            Welcome to Aithical
          </h2>
          <p>
            <b>Ethical AI, made simple.</b>
            <br /><br />
            As AI research develops and new tools become available, we at aithical recognize ethical considerations 
            can sometimes get lost in the development process, especially for those unfamiliar with fairness and ethics in AI. 
            That’s why we do the hard work for you; by compiling AI toolkits, fairness metrics, relevant legislation, and 
            ethical guidelines in one place, you can focus less on searching and more on creating. Our all-in-one platform makes
             it easy for anyone to learn about AI fairness, test a model, and ensure compliance with existing legislation and ethical 
             guidelines. Whether you're a researcher, student, developer, data scientist or business professional, aithical is a one 
             stop shop for fairness and ethics in AI. 
            <br /><br />         
      
          </p>
          <h2>
            Our Mission
          </h2>
          <p>
            At aithical, our mission is to <b>  ensure fair and ethical development at every stage of a project’s evolution.
 </b>
            <br /><br />
            By providing the newest regulations, guidelines, and toolkits, we strive to create a future where every new AI project is certified ethical 
            and fair. While technology is advancing at an exponential pace, aithical ensures that human good is at the center of every algorithm.
            <br /><br />         
  
          </p>
          <h2>
            How We Work
          </h2>
          <p class="mob4">
          aithical utilizes a zero-shot classification task provided in Facebook’s <a href="https://huggingface.co/facebook/bart-large"> BART Large Language Model</a> in order to categorize 
          natural language descriptions of projects utilizing artificial intelligence and machine learning algorithms. We then display 
          regulations and guidelines that are relevant to projects in that specific category. 
          <br></br>
          <br></br>
          Future developments will add to our site’s existing functionality. We plan on implementing a file upload system to the 
          fairness metrics page, allowing users to upload and run tests for various fairness metrics on their datasets and models, 
          alongside the outputs of said models. These results will inform the user on weaknesses in their model and dataset and 
          provide better insight on effective bias mitigation strategies that will be available on aithical. Keep up to date with new changes
          on our <a href="https://github.com/JanPat/react-flask-app">GitHub Repo!</a>
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