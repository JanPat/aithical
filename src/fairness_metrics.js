import React, {useState} from 'react';

function FairnessMetrics() {

  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (tabNumber) => {
    setToggleTab(tabNumber);
  };

  return (

    <body>
      <div class="header">
        <div class="inner_header">
          <a href="home" class="header_img"
          ><img
              src="https://i.imgur.com/gUzP4ml.png" alt='Aithical'
            /></a>
          <a href="regulations_and_guidelines" class="header_link">Project Analysis</a>
          <a href="fairness_metrics" class="header_link header_page">Fairness Metrics</a>
          <div class="header_spacer"></div>
          <a href="about" class="header_link">About</a>
          <a href="connect" class="header_link">Connect</a>
        </div>
      </div>

      <div class="content">
        <div class="main_submit">

        
        <div id='fairness_container1'>
           <div className="bloc-tabs">
           <button className={toggleTab === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleState(1)}> Fairness Through Awareness
           </button>
          <button className={toggleTab === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleState(2)}> Equalized Odds
           </button>
           <button className={toggleTab === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleState(3)}> Equal Opportunity
           </button>
          <button className={toggleTab === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleState(4)}> Predictive Equality
           </button>
           <button className={toggleTab === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleState(5)}> Demographic Parity
           </button>
          </div>
        </div>


          

          <div className={toggleTab === 1 ? 'conten active-conten' : 'conten'} >
          <div class="incident_form_container">
            <h1 class="wage_title">
            Fairness Through Awareness
            </h1>

            <div class="wage_spacer"></div>

            <div class="wage_sub">
              <h2>
                What does it compare?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Distance (e.g., Hellinger distance)  between probability distributions over two individuals prediction outcomes and distance (e.g., the average of the normalized difference of the similarity metrics) between the individuals’ actual outcomes.
                    Implies similar individuals should have similar predictions.
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              When is it achieved?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                The distance between the distribution of outcomes of two individuals is at most the distance between those two individuals. 
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              When is it suitable to use?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Optimization problems
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Drawbacks
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Challenging to determine a suitable and fair metric to use to measure the similarity between two individuals; requires input from professionals with domain expertise. 
Cannot be used when a trustworthy, fair distance metric is not available. 
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Job Hiring Example
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Individuals with similar education levels and job experience should have similar probabilities of being hired. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              Evaluate Your Fairness Metrics
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
              </div>
              <div class="wage_group wage_full">
                  <div class="align_submit btnv">
                    <button class="eval_btn">Evaluate</button>
                  </div>
              </div>
            </div>
            </div>
          </div>

          <div className={toggleTab === 2 ? 'conten active-conten' : 'conten'} >
          <div class="incident_form_container">
            <h1 class="wage_title">
            Equalized Odds
            </h1>

            <div class="wage_spacer"></div>

            <div class="wage_sub">
              <h2>
                What does it compare?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                True and false positive rates for subpopulations of a sensitive attribute.
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              When is it achieved?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                True and false positive rates are the same for both subpopulations.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              When is it suitable to use?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                In scenarios where the ground truth exists and does not contain any bias.
In situations where recall is more important than precision.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Drawbacks
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                May not help close the gap between subpopulations in the long term.
Rarely satisfied in practice.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Job Hiring Example
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                The probability that a qualified applicant is predicted hired (true positive rate; TPR) and the probability that an unqualified applicant is incorrectly predicted hired (false positive rate; FPR) is the same for different subpopulations. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              Evaluate Your Fairness Metrics
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
              </div>
              <div class="wage_group wage_full">
                  <div class="align_submit btnv">
                    <button class="eval_btn">Evaluate</button>
                  </div>
              </div>
            </div>
            </div>
          </div>

          <div className={toggleTab === 3 ? 'conten active-conten' : 'conten'} >
          <div class="incident_form_container">
            <h1 class="wage_title">
            Equal Opportunity
            </h1>

            <div class="wage_spacer"></div>

            <div class="wage_sub">
              <h2>
                What does it compare?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                True positive rate between subpopulations of a sensitive attribute.
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              When is it achieved?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                True positive rate is equal among subpopulations.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              When is it suitable to use?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Fairness between groups is sensitive to false negatives; the positive outcome is desirable.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Drawbacks
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Does not take into consideration the number of false positives.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Job Hiring Example
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Hiring an equal proportion of qualified individuals from each subpopulation. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              Evaluate Your Fairness Metrics
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
              </div>
              <div class="wage_group wage_full">
                  <div class="align_submit btnv">
                    <button class="eval_btn">Evaluate</button>
                  </div>
              </div>
            </div>
            </div>
          </div>

          <div className={toggleTab === 4 ? 'conten active-conten' : 'conten'} >
          <div class="incident_form_container">
            <h1 class="wage_title">
            Predictive Equality
            </h1>

            <div class="wage_spacer"></div>

            <div class="wage_sub">
              <h2>
                What does it compare?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                False positive rate between subpopulations of a sensitive attribute.
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              When is it achieved?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                False positive rate is equal among subpopulations.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              When is it suitable to use?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Fairness between groups is sensitive to false positives; the positive outcome is undesirable.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Drawbacks
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Completely insensitive to false negatives.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Job Hiring Example
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                The probability that an unqualified applicant is incorrectly predicted hired is the same for different subpopulations. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              Evaluate Your Fairness Metrics
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
              </div>
              <div class="wage_group wage_full">
                  <div class="align_submit btnv">
                    <button class="eval_btn">Evaluate</button>
                  </div>
              </div>
            </div>
            </div>
          </div>

          <div className={toggleTab === 5 ? 'conten active-conten' : 'conten'} >
          <div class="incident_form_container">
            <h1 class="wage_title">
            Demographic Parity
            </h1>

            <div class="wage_spacer"></div>

            <div class="wage_sub">
              <h2>
                What does it compare?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Predicted acceptance rates of subpopulations of a sensitive attribute.. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              When is it achieved?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Predicted acceptance rates are the same for both subpopulations.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              When is it suitable to use?
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                There is a preferred decision, and no other considerations should be made for that decision.
The true label is not trustworthy due to inaccurate / biased measurement.
Some regulations or standards are imposed.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Drawbacks
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Does not acknowledge any potential correlation between the true label and sensitive attribute.
Often conflicts with ground truth.
Masking; a decision maker selecting random members of a sensitive group to fulfill the metric may perpetuate pre-existing biases towards that group.
                </p>
              </div>
                
            </div>

            <div class="wage_sub">
              <h2>
              Job Hiring Example
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
                <p>
                Equally hiring applicants from different subpopulations. 
                </p>
              </div>
            </div>

            <div class="wage_sub">
              <h2>
              Evaluate Your Fairness Metrics
              </h2>
            </div>
            <div class="wage_inputs vert_align">
              <div class="wage_group wage_full fontsize">
              </div>
              <div class="wage_group wage_full">
                  <div class="align_submit btnv">
                    <button class="eval_btn">Evaluate</button>
                  </div>
              </div>
            </div>
            </div>
          </div>

            

            


        </div>
      </div>

    </body>

  )
}

export default FairnessMetrics;