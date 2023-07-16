//External Imports
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./LivepointUI.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
//Imgs
import LivepointUIImg1 from "../../../../Images/LivepointUI-Img1.png";
import LivepointUIImg2 from "../../../../Images/invision-logo.png";
import LivepointUIImg3 from "../../../../Images/livepoint-intro-img.png";
import LivepointUIImg4 from "../../../../Images/livepointUI-problem-img.png";
import LivepointUIImg5 from "../../../../Images/livepointUI-wireframe1.png";
import LivepointUIImg6 from "../../../../Images/livepointUI-wireframe2.png";
import LivepointUIImg7 from "../../../../Images/livepointUI-wireframe3.png";
import LivepointUIImg8 from "../../../../Images/livepointUI-wireframe4.png";
import LivepointUIImg9 from "../../../../Images/livepointUI-final-img.png";

/**
 * @function LivepointUI
 * @returns The Livepoint UI page content
 */
const LivepointUI = () => {
  return (
    <div className="livepointUI-container">
      <div className="livepointUI-intropage">
        <div className="livepointUI-left">
          <div className="livepointUI-title-container">
            <h1>Livepoint UI</h1>
            <p> - 2021</p>
          </div>
          <h2 className="livepointUI-intropage-para">
            A company project for creating a{" "}
            <span className="livepointUI-intro-para-highlight">
              fast and reliable
            </span>{" "}
            website hosting platform
          </h2>
          <div className="livepointUI-cat-container">
            <div className="livepointUI-catagory">UX</div>
            <div className="livepointUI-catagory">UI</div>
            <div className="livepointUI-catagory">Sketch</div>
          </div>
        </div>
        <div className="livepointUI-right">
          <img src={LivepointUIImg1} height="320px" />
          <div className="livepointUI-seelive-container">
            <a href="https://james861689.invisionapp.com/console/share/CB3544KTXP/815616019">
              <div className="livepointUI-seelive">See Live Mockup</div>
            </a>
            <img src={LivepointUIImg2} height="25px" />
          </div>
        </div>
      </div>
      <div className="livepointUI-intro">
        <div className="livepointUI-left">
          <h1 className="livepointUI-intro-title">Intro</h1>
          <p className="livepointUI-intro-para">
            My first large task working at Livepoint was to produce the user
            interface for a new application they were working on. The
            applications unique selling point was reliable website hosting, what
            this means is multiple servers nationwide eliminating issues when
            one goes down for example.
          </p>
        </div>
        <div className="livepointUI-right">
          <img src={LivepointUIImg3} />
        </div>
      </div>
      <div className="livepointUI-problem">
        <h1 className="livepointUI-intro-title">Problem</h1>
        <div className="livepointUI-para-wrap">
          <div className="livepointUI-left">
            <p className="livepointUI-intro-para">
              A first draft for the application had already been produced
              however it was very basic and didn’t convey the level of
              professionalism the company was looking for. Whilst conducting my
              research I was looking for inspiration that
            </p>
          </div>
          <div className="livepointUI-right">
            <p
              className="livepointUI-intro-para"
              id="livepointUI-intro-para-spacing"
            >
              combined both efficiency and elegance whilst also showing the
              reliability aspect. I solved this issue by creating a clean
              interface allowing the user to navigate to the most important
              areas of the application.
            </p>
          </div>
        </div>
        <img
          src={LivepointUIImg4}
          height="500px"
          className="livepointUI-problem-img"
        />
      </div>
      <div className="livepointUI-wireframes">
        <h1 className="livepointUI-intro-title">Wireframes</h1>
        <img src={LivepointUIImg5} className="livepointUI-wireframe-img-one" />
        <div className="livepointUI-wireframe-img-bottom-container">
          <img
            src={LivepointUIImg6}
            className="livepointUI-wireframe-bottom-img"
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="livepointUI-wireframe-arrow"
          />
          <img
            src={LivepointUIImg7}
            className="livepointUI-wireframe-bottom-img"
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="livepointUI-wireframe-arrow"
          />
          <img
            src={LivepointUIImg8}
            className="livepointUI-wireframe-bottom-img"
          />
        </div>
      </div>
      <div className="livepointUI-solution">
        <h1 className="livepointUI-intro-title">Solution</h1>
        <p className="livepointUI-intro-para">
          Across one and a half weeks I produced from concept to final design
          for the Livepoint Web Hosting Platform. I produced a clean and slick
          design allowing the user to easily navigate between areas of the
          application with efficiency. I also took inspiration from other
          similar competitors to see what works/doesn’t work in their designs to
          create a modern well-rounded project
        </p>
      </div>
      <img src={LivepointUIImg9} className="livepointUI-full-img" />
      <h1 className="livepointUI-goodbye-message">
        I hope you{"  "}
        <span className="livepointUI-intro-para-highlight">enjoyed</span> the
        project<br></br>
        {"  "}
        <span className="livepointUI-goodbye-message-small">
          see more below :)
        </span>
      </h1>
      <NavLink to="/" exact className="link">
        <p className="Link">Back to projects</p>
      </NavLink>
    </div>
  );
};
export default LivepointUI;
