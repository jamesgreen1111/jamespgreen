import React from 'react';

import classes from './MainContentTitle3.module.css';
import FillerImg from  '../../../Images/Arrow.png';

const MainContentTitleThree = (props) => (
    <div className={classes.MainContentTitleThree}>
        <h1 className={classes.h1}>UI Projects</h1>
        <p className={classes.p}>Swipe to see catagories</p>
        <img  className={classes.Arrow} src={FillerImg} height="23px"/>
    </div>


);
export default MainContentTitleThree;