import classes from "./Layout.module.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";
import Radium from "radium";

import Header from "./Header/Header";
import Swipeable from "./AllContentSwipable/Swipable";
import HubPage from "./Hubpage/HubPage";
import MySkills from "./MySkills/MySkills";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "./Footer/Footer";

import PortfolioProject from "./Main-Content/Project1/PortfolioProject/PortfolioProject";
import HsbcProject from "./Main-Content/Project1/HsbcProject/HsbcProject";
import AmbrosiaProject from "./Main-Content/Project1/AmbrosiaProject/AmbrosiaProject";
import EnduranceProject from "./Main-Content/Project1/EnduranceProject/EnduranceProject";
import LivepointUI from "./Main-Content/Project1/LivepointUI/LivepointUI";
import LivepointCode from "./Main-Content/Project1/LivepointCode/LivepointCode";
import BlissProject from "./Main-Content/Project1/BlissProject/BlissProject";

class Layout extends Component {
  state = {
    IntroPage: true,
  };

  IntroPageHandler = () => {
    if (this.state.IntroPage === true) {
      this.setState({ IntroPage: false });
    } else if (this.state.IntroPage === false) {
      this.setState({ IntroPage: true });
    }
  };
  render() {
    return (
      <div className={classes.Layout}>
        <HubPage
          IntroPageTrue={this.state.IntroPage}
          IntroPageHandler={this.IntroPageHandler}
        />

        <Header IntroPageHandler={this.IntroPageHandler} />

        <div className={classes.bodycontentcontainer}>
          <Route path="/" exact component={Swipeable} />
          <Route path="/Mystack" exact component={MySkills} />
          <Route path="/Aboutme" exact component={AboutMe} />

          <Route path="/PortfolioProject" exact component={PortfolioProject} />
          <Route path="/HSBCProject" exact component={HsbcProject} />
          <Route path="/AmbrosiaProject" exact component={AmbrosiaProject} />
          <Route path="/EnduranceProject" exact component={EnduranceProject} />
          <Route path="/LivepointUI" exact component={LivepointUI} />
          <Route path="/LivepointCode" exact component={LivepointCode} />
          <Route path="/BlissProject" exact component={BlissProject} />
        </div>

        <Footer />
      </div>
    );
  }
}
export default Radium(Layout);
