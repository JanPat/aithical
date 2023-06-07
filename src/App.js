import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  const [currentTime, setCurrentTime] = useState(0);
  console.log(currentTime)

  useEffect(() => {
    fetch('/api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);



  return (
    <div className="App">
      <header className="App-header">




        <div id="root"></div>
    <div class="header">
      <div class="header_menu">

      </div>
      <div class="header_content">
        <h1>@ username/Project Analysis</h1>
      </div>
      
    </div>
    <div class="sidebar">
      <p>
        ICON<br/>
        analysis
      </p>
      <p>
        ICON<br/>
        about
      </p>
      <p>
        ICON<br/>
        0-shot
      </p>
    </div>
    <div class="project_report_body">
      <div>
       
        <div class="report_inputs">
          <div class="report_inputs_inner">
            <h1>Project Description:</h1>

            <textarea
              id="project_description_input"
              name="project_description_input"
              rows="4"
              cols="1"
              placeholder="Project Description">
            </textarea>
        
            <button id="description_submit" onClick="submit_description()">Submit Description</button>
          </div>
        </div>

        <br/>
        <div id="regulations_container">
          <h1>Regulations</h1>
          <div class="report_container">
            <div class="container_blob">
                <p class="blog_title">The {currentTime}</p>
                <p>
                  These amendments appear to be intended to create a regulatory framework to give the provincial administrator the authority to issue vehicle permits for the operation of autonomous vehicles.

Of note, these amendments require that drivers be in the driver's seat and at the controls of the AV, which would preclude level 5 automation (fully automated) where the vehicle does not contain any driver controls.

Further, to minimize the mischief that can occur with automated technology, Saskatchewan's amendments contain broad provisions intended to prevent interference or obstruction of AVs by third parties.
                </p>
                <a href="google.ca">Read More</a>
            </div>
            <div class="container_blob">
                <p class="blog_title">The Vehicle Technology Testing Act</p>

<p>

  This Bill amends The Highway Traffic Act, The Insurance Act and The Manitoba Public Insurance Corporation Act to allow for the testing of vehicles with automated driving systems or other new technology.

Under a technology testing permit, a vehicle or a new vehicle technology can be exempted from certain highway traffic law requirements.

A vehicle operated under such a permit may also be exempted from being insured through Manitoba Public Insurance. MPI may recover from the permit holder the costs of property damage and personal injury benefits paid out as a result of an at-fault accident caused by the vehicle.

</p>                <a href="google.ca">Read More</a>
            </div>
            <div class="container_blob">
                <p class="blog_title">O. Reg. 306/15: Pilot Project - Automated Vehicles</p>

<p>
  Ontario's regulation contains extensive guidance on AV use and tasks, while also providing clarity by defining what constitutes an "advanced driver assistance system" or a "dynamic driving task." 

In 2019, Ontario introduced important amendments to its pilot project regulatory framework. 
As part of these amendments, the province moved to open the way to public use of level 3 AVs and permit driverless testing of levels 4 and 5 AVs, along with co-operative truck platooning.
</p>
                <a href="google.ca">Read More</a>
            </div>
          </div>
        </div>

        <div id="guildelines_container">
          <h1>Guidelines</h1>
          <div class="report_container">
            <div class="container_blob">
                <p class="blog_title">Blob Title</p>
                <p>Blob Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nisi ac felis ultrices iaculis sed a ligula. Curabitur tincidunt nisl ut nunc semper iaculis.</p>
                <a href="google.ca">Read More</a>
            </div>
            <div class="container_blob">
                <p class="blog_title">Blob Title</p>
                <p>Blob Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nisi ac felis ultrices iaculis sed a ligula. Curabitur tincidunt nisl ut nunc semper iaculis.</p>
                <a href="google.ca">Read More</a>
            </div>
            <div class="container_blob">
                <p class="blog_title">Blob Title</p>
                <p>Blob Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget nisi ac felis ultrices iaculis sed a ligula. Curabitur tincidunt nisl ut nunc semper iaculis.</p>
                <a href="google.ca">Read More</a>
            </div>
          </div>
        </div>

        <div id="experts_container">
          <h1>Experts</h1>
          <div class="report_container">
            
          </div>
        </div>

      </div>
    </div>



      </header>
    </div>
  );
}

export default App;
