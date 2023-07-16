import classes from './Project3.module.css';
import React from 'react';
import { NavLink} from 'react-router-dom';

import PortfolioImg from  '../../../Images/PortfolioImg.jpg';
import HSBCProject from '../../../Images/HSBC-Project.jpg';
import AmbrosiaCover from '../../../Images/Ambrosia-Cover.jpg';
import EnduranceImg from  '../../../Images/Endurance-1.jpg';

const ProjectPageThree = (props) => (
    <div>


    <div className={classes.Latest}>
                {/* Ambrosia Project */}
                <NavLink className={classes.PortfolioLink} to="/AmbrosiaProject" exact>
        <div className={classes.ProjectContainer}>
        <img src={AmbrosiaCover} className={classes.img}/>

        <div className={classes.Skills}>
            <div className={classes.TitleDate}>
            <h1 className={classes.Title}>Ambrosia 360° Campaign .</h1>
            <p className={classes.date}>2021</p>
            </div>
        <ul>
            <li>Branding</li>
            <li>Package Design</li>
            <li>Photoshop</li>
        </ul>
        </div>

        <p className={classes.Paragraph}>A Marketing campaign on healthy energy drinks themed around Greek Gods.</p>
            
            </div>
        </NavLink>

            {/* HSBC Project */}
            <NavLink className={classes.HSBCLink} to="/HSBCProject" exact>
            <div className={classes.ProjectContainer}>
        <img src={HSBCProject} className={classes.img}/>

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

        <p className={classes.Paragraph}>User Interface for an HSBC Private Banking app.</p>
            </div>
            </NavLink>
  
            

    </div>
    </div>
)
export default ProjectPageThree;