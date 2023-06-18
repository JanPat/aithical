import React from 'react';


function Connect(){

  const LinkDieynaba = () => {
    window.location.href = 'https://www.linkedin.com/in/janvi-patel-954b2a173/';
  };

  const LinkAva = () => {
    window.location.href = 'https://www.linkedin.com/in/ava-gilmour-185ab6251/';
  };

  const LinkBonam = () => {
    window.location.href = 'https://www.linkedin.com/in/janvi-patel-954b2a173/';
  };

  const LinkMaddie = () => {
    window.location.href = 'https://www.linkedin.com/in/madeline-mussio/';
  };


  const LinkJanvi = () => {
    window.location.href = 'https://www.linkedin.com/in/janvi-patel-954b2a173/';
  };

  

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
            <img
              src="https://static.wixstatic.com/media/4dfff7_792a117cf5014ad79a25c6ea33ee4c7c~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profile-picture-circle-png-blank-3.png"
            />
            <h3>
            Dieynaba
              <br/>Diallo
            </h3>
          </div>
          <div onClick={LinkAva}>
            <img
              src="https://static.wixstatic.com/media/4dfff7_792a117cf5014ad79a25c6ea33ee4c7c~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profile-picture-circle-png-blank-3.png"
            />
            <h3>
            Ava
              <br/>Gilmour
            </h3>
          </div>
          <div onClick={LinkBonam}>
            <img
              src="https://static.wixstatic.com/media/4dfff7_792a117cf5014ad79a25c6ea33ee4c7c~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profile-picture-circle-png-blank-3.png"
            />
            <h3>
            Bonam
              <br/>Mingole
            </h3>
          </div>
          <div onClick={LinkMaddie}>
            <img
              src="https://static.wixstatic.com/media/4dfff7_792a117cf5014ad79a25c6ea33ee4c7c~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profile-picture-circle-png-blank-3.png"
            />
            <h3>
            Madeline
              <br/>Mussio
            </h3>
          </div>
          <div onClick={LinkJanvi}>
            <img
              src="https://static.wixstatic.com/media/4dfff7_792a117cf5014ad79a25c6ea33ee4c7c~mv2.png/v1/fill/w_260,h_260,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/profile-picture-circle-png-blank-3.png"
            />
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