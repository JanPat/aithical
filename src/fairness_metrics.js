import React, {useState} from 'react';
import './fairness_metrics.css';

function FairnessMetrics(){
  
  const [toggleTab, setToggleTab] = useState(1);
  const toggleState = (tabNumber) => {
    setToggleTab(tabNumber);
  };

    return (

        <body>
        <div className="header">
          <div className="inner_header">
          <a href="home" className="header_img"
            ><img
              src="https://wp.uthscsa.edu/mikiten-graduate-symposium/wp-content/uploads/sites/158/2019/02/placeholder.com-logo3.jpg"
          /></a>
            <a href="regulations_and_guidelines" className="header_link header_page">Regulations and Guidelines</a>
          <a href="fairness_metrics" className="header_link">Fairness Metrics</a>
          <div className="header_spacer"></div>
          <a href="about" className="header_link">About</a>
          <a href="contact" className="header_link">Contact</a>
          </div>
        </div> 
        <div className="container1">
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
           <div className="conten-tabs">
             <div className={toggleTab === 1 ? 'conten active-conten' : 'conten'} >
             <table>
  <tr>
    <th>What does it compare?</th>
    <th>When is it achieved?</th>
    <th>When is it suitable to use?</th>
    <th>Drawbacks</th>
    <th>Job Hiring Example</th>
  </tr>
  <tr>
    <td>Distance (e.g., Hellinger distance)  between probability distributions over two individuals’ prediction outcomes and distance (e.g., the average of the normalized difference of the similarity metrics) between the individuals’ actual outcomes.
Implies similar individuals should have similar predictions.
</td>
    <td>The distance between the distribution of outcomes of two individuals is at most the distance between those two individuals. </td>
    <td>Optimization problems</td>
    <td>Challenging to determine a suitable and fair metric to use to measure the similarity between two individuals; requires input from professionals with domain expertise. 
Cannot be used when a trustworthy, fair distance metric is not available. 
</td>
<td>Individuals with similar education levels and job experience should have similar probabilities of being hired. </td>
  </tr>
  </table>
 </div>
         <div className={toggleTab === 2 ? 'conten active-conten' : 'conten'} >
         <table>
  <tr>
    <th>What does it compare?</th>
    <th>When is it achieved?</th>
    <th>When is it suitable to use?</th>
    <th>Drawbacks</th>
    <th>Job Hiring Example</th>
  </tr>
    </table>
 </div>
 <div className={toggleTab === 3 ? 'conten active-conten' : 'conten'} >
         <table>
  <tr>
    <th>What does it compare?</th>
    <th>When is it achieved?</th>
    <th>When is it suitable to use?</th>
    <th>Drawbacks</th>
    <th>Job Hiring Example</th>
  </tr>
    </table>
 </div>
 <div className={toggleTab === 4 ? 'conten active-conten' : 'conten'} >
         <table>
  <tr>
    <th>What does it compare?</th>
    <th>When is it achieved?</th>
    <th>When is it suitable to use?</th>
    <th>Drawbacks</th>
    <th>Job Hiring Example</th>
  </tr>
    </table>
 </div>
 <div className={toggleTab === 5 ? 'conten active-conten' : 'conten'} >
         <table>
  <tr>
    <th>What does it compare?</th>
    <th>When is it achieved?</th>
    <th>When is it suitable to use?</th>
    <th>Drawbacks</th>
    <th>Job Hiring Example</th>
  </tr>
    </table>
 </div>
         </div>
           </div> 
           <div>
            <button className="evaluate">Evaluate</button>
           </div>
          
     </body>

    )
}

export default FairnessMetrics;