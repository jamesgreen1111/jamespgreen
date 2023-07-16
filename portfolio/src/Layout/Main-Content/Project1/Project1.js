import classes from "./Project1.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

import PortfolioImg from "../../../Images/PortfolioImg.jpg";
import HSBCProject from "../../../Images/HSBC-Project.jpg";
import AmbrosiaCover from "../../../Images/Ambrosia-Cover.jpg";
import EnduranceImg from "../../../Images/Endurance-1.jpg";
import FillerImg from "../../../Images/Arrow.png";
import LivepointUIImg from "../../../Images/livepointUI-homepage-img.jpg";
import BlissImg from "../../../Images/bliss-three.jpg";

const ProjectPageOne = (props) => (
  <div className={classes.Container}>
    <div className={classes.MainContentTitle}>
      <h2 className={classes.LatestHeader}>Latest</h2>
      <p className={classes.Swipe}>Swipe here to see catagories</p>
      <img className={classes.Arrow} src={FillerImg} height="23px" />
    </div>

    <div className={classes.Latest}>
      {/* Livepoint Code */}
      <NavLink className={classes.PortfolioLink} to="/LivepointCode" exact>
        <div className={classes.ProjectContainer}>
          <img src={LivepointUIImg} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Livepoint Code .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>React</li>
              <li>Typescript</li>
              <li>Chartjs</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            Company project user interface redesign before implementing code.
          </p>
        </div>
      </NavLink>

      {/* Livepoint UI */}
      <NavLink className={classes.PortfolioLink} to="/livepointUI" exact>
        <div className={classes.ProjectContainer}>
          <img src={LivepointUIImg} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Livepoint UI .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>UX</li>
              <li>UI</li>
              <li>Sketch</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            Company project user interface redesign before implementing code.
          </p>
        </div>
      </NavLink>

      {/* Bliss Project */}
      <NavLink className={classes.PortfolioLink} to="/BlissProject" exact>
        <div className={classes.ProjectContainer}>
          <img src={BlissImg} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Bliss App .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>UX</li>
              <li>UI</li>
              <li>Figma</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            Exploration app utilizing UX/UI skills.
          </p>
        </div>
      </NavLink>

      {/* Portfolio Project */}
      <NavLink className={classes.PortfolioLink} to="/PortfolioProject" exact>
        <div className={classes.ProjectContainer}>
          <img src={PortfolioImg} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Portfolio Site .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>React</li>
              <li>UI</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>I created my Portfoio in React.</p>
        </div>
      </NavLink>

      {/* Ambrosia Project */}
      <NavLink className={classes.PortfolioLink} to="/AmbrosiaProject" exact>
        <div className={classes.ProjectContainer}>
          <img src={AmbrosiaCover} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Ambrosia 360° Campaign .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>Branding</li>
              <li>Package Design</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            A Marketing campaign on healthy energy drinks themed around Greek
            Gods.
          </p>
        </div>
      </NavLink>

      {/* HSBC Project */}
      <NavLink className={classes.HSBCLink} to="/HSBCProject" exact>
        <div className={classes.ProjectContainer}>
          <img src={HSBCProject} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>HSBC App Design .</h1>
              <p className={classes.date}>2020</p>
            </div>
            <ul>
              <li>UI</li>
              <li>Invision</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            User Interface for an HSBC Private Banking app.
          </p>
        </div>
      </NavLink>

      {/* Endurance Project */}
      <NavLink className={classes.PortfolioLink} to="/EnduranceProject" exact>
        <div className={classes.ProjectContainer}>
          <img src={EnduranceImg} className={classes.img} />

          <div className={classes.Skills}>
            <div className={classes.TitleDate}>
              <h1 className={classes.Title}>Endurance App .</h1>
              <p className={classes.date}>2021</p>
            </div>
            <ul>
              <li>React</li>
              <li>Firebase</li>
              <li>UI</li>
            </ul>
          </div>

          <p className={classes.Paragraph}>
            Fully function fitness social media platform.
          </p>
        </div>
      </NavLink>
    </div>
  </div>
);
export default ProjectPageOne;
