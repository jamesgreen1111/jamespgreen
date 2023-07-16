import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './EnduranceProject.module.css';

import EnduanceImg1 from '../../../../Images/Endurance-1.jpg';
import EnduranceImg2 from '../../../../Images/Endurance-img2.jpg';
import EnduranceImg3 from '../../../../Images/Endurance-Img3.jpg';
import HSBCImg4 from '../../../../Images/HSBC-img4.jpg';


class EnduranceProject extends Component {
    render () {
        return(
            <div className={classes.Container}>
            <h2 className={classes.Title}>Endurance App</h2>
            <a href="https://endurance2-55e0e.firebaseapp.com/"><p className={classes.Live}>See Live Project</p></a>
            <img src={EnduanceImg1} className={classes.Img}></img>

            <ul className={classes.Skills}>
                <li>React</li>
                <li>Firebase</li>
            </ul>
            <h3 className={classes.Titles}>The Idea</h3>
                <p className={classes.Para}>Endurance is a fully functional web app built in the react framework using hooks.
                For the data storage of the app I used Firebase. I produced a social media fitness app to help motivate those 
                who feel disconnected from the world of fitness and intimidated by it. By watching useful tips and content
                as well as creating goals Endurance aims to motivate users to want to workout. </p>

            <img src={EnduranceImg2} className={classes.Img}></img>
                    <h3 className={classes.Titles}>The Process</h3>
                <p className={classes.Para}>The web app was created by connecting the redux state to
                database, this meant any data being stored on the back-end was easily accessible on the
                front-end. The app aims to be friendly and inviting to make the user feel at ease in an
                enviroment they are not use to. This is why I created my own illustration style for the app,
                to continue with the warm inviting nature.</p>

                <img src={EnduranceImg3} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Final Thoughts</h3>
                <p className={classes.Para}>The project was an overall interesting concept that allowed
                me to explore new areas I hadn't before. There are many areas I want to develop further
                which I will continue to update in the future.</p>

            <NavLink to="/" exact className={classes.link} ><p className={classes.Link}>Back to projects</p></NavLink>
            <div className={classes.space}></div>
        </div>
        )
    }
}
export default EnduranceProject;