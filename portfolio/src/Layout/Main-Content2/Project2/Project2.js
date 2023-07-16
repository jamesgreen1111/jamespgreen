import classes from './Project2.module.css';
import React from 'react';
import { NavLink} from 'react-router-dom';

import PortfolioImg from  '../../../Images/PortfolioImg.jpg';
import HSBCProject from '../../../Images/HSBC-Project.jpg';
import AmbrosiaCover from '../../../Images/Ambrosia-Cover.jpg';
import EnduranceImg from  '../../../Images/Endurance-1.jpg';

const ProjectPageTwo = (props) => (
    <div>

    <div className={classes.Latest}>
        {/* Portfolio Project */}
        <NavLink className={classes.PortfolioLink} to="/PortfolioProject" exact>
        <div className={classes.ProjectContainer}>
        <img src={PortfolioImg} className={classes.img}/>

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

        <p className={classes.Paragraph}>This is my latest project. I created my Portfoio in React.</p>
            
            </div>
        </NavLink>


            {/* Endurance Project */}
        <NavLink className={classes.PortfolioLink} to="/EnduranceProject" exact>
        <div className={classes.ProjectContainer}>
        <img src={EnduranceImg } className={classes.img}/>

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

        <p className={classes.Paragraph}>Fully function fitness social media platform.</p>
            
            </div>
        </NavLink>
  
            

    </div>
    </div>
)
export default ProjectPageTwo;