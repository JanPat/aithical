import React from 'react';


function Connect(){

  const LinkDieynaba = () => {
    window.location.href = 'https://www.linkedin.com/in/dieynaba-diallo-59b404200/';
  };

  const LinkAva = () => {
    window.location.href = 'https://www.linkedin.com/in/ava-gilmour-185ab6251/';
  };

  const LinkBonam = () => {
    window.location.href = 'https://www.linkedin.com/';
  };

  const LinkMaddie = () => {
    window.location.href = 'https://www.linkedin.com/in/madeline-mussio/';
  };


  const LinkJanvi = () => {
    window.location.href = 'https://www.linkedin.com/in/janvi-patel-954b2a173/';
  };


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
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link header_page">Connect</a>
          </div>
        </div>
        <div class="content_3">
      <div class="inner_container_simple">
        <h1>Connect with Us</h1>
        <p>
          Have any questions, suggestions, or want to brainstorm with us?
          <br/><br/>
          <a href="mailto: aithical@gmail.com">Send us an email!</a>
        </p>
        <p>
        We are a group of women passionate about AI for social good and the ethical implementation of AI solutions.        </p>
        <div class="picture_div">
        <div onClick={LinkDieynaba}>
            <img src="https://imgur.com/rBN3He8.jpg" alt="headshot Dieynaba"/>
            <h3>
            Dieynaba
              <br/>Diallo
            </h3>
          </div>
          <div onClick={LinkAva}>
            <img src="https://imgur.com/X4bKAfD.jpg" alt="headshot Ava"/>
            <h3>
            Ava
              <br/>Gilmour
            </h3>
          </div>
          <div onClick={LinkBonam}>
            <img src="https://imgur.com/cS8MFqj.jpg" alt="headshot Bonam"/>
            <h3>
            Bonam
              <br/>Mingole
            </h3>
          </div>
          <div onClick={LinkMaddie}>
            <img src="https://imgur.com/YqaNEPm.jpg" alt="headshot Maddie"/>
            <h3>
            Madeline
              <br/>Mussio
            </h3>
          </div>
          <div onClick={LinkJanvi}>
            <img src="https://imgur.com/uVcKbkM.jpg" alt="headshot Janvi"/>
            <h3 class="mob">
            Janvi
              <br/>Patel
            </h3>
          </div>
        </div>
      </div>
    </div>

      </body>

    )
}

export default Connect;