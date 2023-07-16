import React, {Component} from 'react';
import classes from './Main-Content3.module.css';

import MainContentTitleThree from './MainContentTitle3/MainContentTitle3';
import Project3 from './Project3/Project3';
class MainContentThree extends Component {
    render () {
        return (
            <div className={classes.MainContent3}>
                <MainContentTitleThree />
                <Project3 />
            </div>
        )
    }

}
export default MainContentThree;