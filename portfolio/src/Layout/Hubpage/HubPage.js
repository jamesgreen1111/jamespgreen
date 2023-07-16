import React from "react";
import classes from "./HubPage.module.css";
import Radium from "radium";

import me from "../../Images/me.png";
import instagram from "../../Images/insta.png";
import linkedin from "../../Images/linkedin.png";
import git from "../../Images/Git.png";
import mail from "../../Images/mail.png";

import img from "../../Images/down-arrow.png";
const HubPage = (props) => (
  <div
    className={props.IntroPageTrue ? classes.HubPageTrue : classes.HubPageFalse}
  >
    <div className={classes.Pattern}>
      <img src={me} className={classes.me}></img>
      <h1 className={classes.IntroTitle}>I'm James Green</h1>
      <p className={classes.Intro}>
        I specialise in UX/UI Design creating digital products. Making the
        future a reality.
      </p>

      <div className={classes.links}>
        <a href="https://www.instagram.com/jamespetegreen/">
          <img src={instagram} width="40px" height="40px"></img>
        </a>
        <a href="https://www.linkedin.com/in/james-green-a67686192/">
          <img src={linkedin} width="40px" height="40px"></img>
        </a>
        <a href="https://github.com/jamesgreen1111/Jamesgreen">
          <img src={git} width="40px" height="40px"></img>
        </a>
        <a href="mailto:jamesgreen111@hotmail.com">
          <img src={mail} width="40px" height="40px"></img>
        </a>
      </div>
      <div className={classes.ContinueWrap}>
        <div className={classes.ButtonExplore} onClick={props.IntroPageHandler}>
          <p className={classes.p}>Explore</p>
        </div>
        <img
          src={img}
          className={classes.DownArrow}
          height="25px"
          onClick={props.IntroPageHandler}
        ></img>
      </div>
    </div>
  </div>
);

export default Radium(HubPage);
