//External Imports
import React from "react";
import { NavLink } from "react-router-dom";
import "./LivepointCode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
//Imgs
import LivepointUIImg1 from "../../../../Images/LivepointUI-Img1.png";
import LivepointUIImg3 from "../../../../Images/livepoint-intro-img.png";
import LivepointUIImg4 from "../../../../Images/LivepointCodeAnalytics1.png";
import LivepointUIImg5 from "../../../../Images/LivepointCodeAnalytics2.png";
import LivepointUIImg6 from "../../../../Images/LivepointCodeAnalytics3.png";
import LivepointUIImg7 from "../../../../Images/LivepointCodeAnalytic4.png";
import LivepointUIImg8 from "../../../../Images/LivepointCode-details-img.png";

import LivepointUIImg9 from "../../../../Images/livepointUI-final-img.png";

/**
 * @function LivepointUI
 * @returns The Livepoint Code page content
 */
const LivepointCode = () => {
  return (
    <div className="livepointUI-container">
      <div className="livepointUI-intropage">
        <div className="livepointUI-left">
          <div className="livepointUI-title-container">
            <h1>Livepoint Code</h1>
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
            <div className="livepointUI-catagory">React</div>
            <div className="livepointUI-catagory">Typescript</div>
            <div className="livepointUI-catagory">Chartjs</div>
          </div>
        </div>
        <div className="livepointUI-right">
          <img src={LivepointUIImg1} height="320px" />
        </div>
      </div>
      <div className="livepointUI-intro">
        <div className="livepointUI-left">
          <h1 className="livepointUI-intro-title">Intro</h1>
          <p className="livepointUI-intro-para">
            After creating the design for the application I worked alongside
            another junior developer building the application from scratch. On
            this page, I will describe some of the coding challenges I had and
            how I overcame them.
          </p>
        </div>
        <div className="livepointUI-right">
          <img src={LivepointUIImg3} />
        </div>
      </div>
      <div className="livepointCode-analytic">
        <h1 className="livepointUI-intro-title">Analytics Implementation</h1>
        <div className="livepointUI-para-wrap">
          <div className="livepointUI-left">
            <p className="livepointUI-intro-para">
              My first Jira task was implementing the Dashboard specifically the
              Analytics overview. I used a plugin called ‘chartjs’ to generate
              different types of graphs based on an object including a data
              array that would plot the points on the graph.
            </p>
          </div>
          <div className="livepointUI-right">
            <p
              className="livepointUI-intro-para"
              id="livepointUI-intro-para-spacing"
            >
              You could hover the elements to see more detail or filter the time
              period at the top. Unfortunately, I am not able to link to the
              GitLab repository as there is no public access however I will
              include snippets of my code below to show how I set up specific
              features.
            </p>
          </div>
        </div>
        <div className="analytics-imgs">
          <img
            src={LivepointUIImg4}
            height="300px"
            className="livepointUI-analytics-img"
          />
          <img
            src={LivepointUIImg5}
            height="300px"
            className="livepointUI-analytics-img"
          />
          <img
            src={LivepointUIImg6}
            height="220px"
            className="livepointUI-analytics-img"
          />
        </div>
        <p className="livepointUI-intro-para">
          For both graphs, I implemented the style and edited the view. Here I
          will only be focusing on the first graph but if you would like to see
          the code for the second I will include it in the document linked
          above. One challenge I had with this task was creating an on hover
          status that would show the data for each day/week/month. I created an
          overlaying axis positioned to align perfectly with the graph
          underneath, it dynamically took the array of data and outputted the
          correct amount of sections. When hovering this would then dynamically
          display the data.
        </p>
        <img
          src={LivepointUIImg7}
          height="500px"
          className="livepointCode-analytic-center"
        />
      </div>
      <div className="livepointCode-webdetails">
        <h1 className="livepointCode-details-title">
          Website Details Implementation
        </h1>
        <p className="livepointUI-intro-para">
          Another large section of the application I produced was the website
          details page. I produced the page over roughly three days implementing
          the design as well as the functionality. Each section was split into
          its own component for a professional and easy to navigate code base.
          The data at the time was hardcoded and implemented using Mirage which
          essentially intercepts the request to the backend and retrieves a
          hardcoded object in its place. This allowed us to work on the front
          end with real data whilst the back end was still being written.
        </p>
        <img
          src={LivepointUIImg8}
          height="500px"
          className="livepointCode-analytic-center"
        />
      </div>

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
export default LivepointCode;
