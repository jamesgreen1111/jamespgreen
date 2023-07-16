import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';


import MainContent from '../Main-Content/MainContent';
import MainContentTwo from '../Main-Content2/MainContent2';
import MainContentThree from '../Main-Content3/Main-Content3';


const styles = {
    slide: {
      padding: 15,
      minHeight: 900,
      color: '#fff',
    },
  };

class Swipeable extends Component {




    render() {
        return (
            <div>
                



<SwipeableViews enableMouseEvents>
      <div style={Object.assign({}, styles.slide, styles.slide1)}><MainContent /></div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}><MainContentTwo/></div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}><MainContentThree /></div>
    </SwipeableViews>

            </div>
        )
    }

};
export default Swipeable;