//External Imports
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./BlissProject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
//Imgs
import blissImg1 from "../../../../Images/bliss-mobile.png";
import blissImg2 from "../../../../Images/invision-logo.png";
import blissImg3 from "../../../../Images/Bliss-wireframes.jpg";
import blissImg4 from "../../../../Images/bliss-three.jpg";
import blissImg5 from "../../../../Images/livepointUI-wireframe1.png";
import blissImg6 from "../../../../Images/livepointUI-wireframe2.png";
import blissImg7 from "../../../../Images/livepointUI-wireframe3.png";
import blissImg8 from "../../../../Images/livepointUI-wireframe4.png";
import blissImg9 from "../../../../Images/bliss-highfidelity.jpg";

/**
 * @function BlissProject
 * @returns The Bliss UI/UX work
 */
const BlissProject = () => {
  return (
    <div className="bliss-container">
      <div className="bliss-intropage">
        <div className="bliss-left">
          <div className="bliss-title-container">
            <h1>Bliss</h1>
            <p> - 2021</p>
          </div>
          <h2 className="bliss-intropage-para">
            an <span className="bliss-intro-para-highlight">exploration</span>{" "}
            app allowing users to find something to do
          </h2>
          <div className="bliss-cat-container">
            <div className="bliss-catagory">UX</div>
            <div className="bliss-catagory">UI</div>
            <div className="bliss-catagory">Figma</div>
          </div>
        </div>
        <div className="bliss-right">
          <img src={blissImg1} height="520px" />
          <div className="bliss-seelive-container">
            <a href="https://james861689.invisionapp.com/console/share/VN2CUP1X5C/570027960">
              <div className="bliss-seelive">See Live Mockup</div>
            </a>
            <img src={blissImg2} height="25px" />
          </div>
        </div>
      </div>
      <div class="bliss-container-light">
        <div className="bliss-intro">
          <div className="bliss-left">
            <h1 className="bliss-intro-title">Intro</h1>
            <p className="bliss-intro-para">
              This was a personal project in which I produced an exploration
              app. The project was User-centred meaning a large amount of time
              went into the user experience section of the project.
            </p>
          </div>

          <div className="bliss-right">
            <img src={blissImg3} />
          </div>
        </div>
      </div>
      <div className="bliss-problem">
        <h1 className="bliss-intro-title">Problem</h1>
        <div className="bliss-para-wrap">
          <div className="bliss-left">
            <p className="bliss-intro-para">
              I needed to produce an application that allowed users to interact
              with a community and find interesting places/journeys to explore
              around their area.
            </p>
          </div>
          <div className="bliss-right">
            <p className="bliss-intro-para" id="bliss-intro-para-spacing">
              The app needed to give the user trust by giving them all the
              necessary information to explore the chosen area along with a
              friendly user interface suited to families and young adults.
            </p>
          </div>
        </div>
        <img src={blissImg4} height="500px" className="bliss-problem-img" />
      </div>

      <div class="bliss-container-light">
        <h1 className="bliss-intro-title">Solution</h1>
        <p className="bliss-intro-para">
          To solve this issue I produced a mockup for an application that worked
          essentially as a guide for the user. They could choose a destination
          around them and see what other users added about the experience, for
          example short videos, tips and reviews.
        </p>
      </div>
      <img src={blissImg9} className="bliss-full-img" />
      <h1 className="bliss-goodbye-message">
        I hope you{"  "}
        <span className="bliss-intro-para-highlight">enjoyed</span> the project
        <br></br>
        {"  "}
        <span className="bliss-goodbye-message-small">see more below :)</span>
      </h1>
      <NavLink to="/" exact className="link">
        <p className="Link">Back to projects</p>
      </NavLink>
    </div>
  );
};
export default BlissProject;
