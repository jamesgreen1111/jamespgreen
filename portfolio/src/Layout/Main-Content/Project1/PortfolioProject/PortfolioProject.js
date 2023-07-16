import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './PortfolioProject.module.css';

import PortfolioImg from '../../../../Images/Portfolio-Front-Img.jpg';

class PortfolioProject extends Component {
    render () {
        return(
            <div className={classes.Container}>
                <h2 className={classes.Title}>Portfolio Website</h2>
                <img src={PortfolioImg} className={classes.Img}></img>

                <ul className={classes.Skills}>
                    <li>React</li>
                    <li>UI</li>
                </ul>

                <p className={classes.Para}>My Portfolio website another major project within my portfolio.
                This is the third version I have create over the course of my Development

               From the beginning of my coding journey till now I have created three versions of my
               portfolio, this one being the most recent. As my skills developed I found myself
               continuing to improve my Portfolio. This is the third iteration that I have created, I plan
               to continue to develop this version making small improvements to it over time. The opening page gives a
               unique quality to the design in attempt to reflect who I am, for example adopting an
               illustration instead of the overused real image.
 </p>

                <NavLink to="/" exact className={classes.link} ><p className={classes.Link}>Back to projects</p></NavLink>


            </div>
        )
    }
}
export default PortfolioProject;