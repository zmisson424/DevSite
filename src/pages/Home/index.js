import React, { Component } from 'react';

import SlideOne from './components/SlideOne';
import SlideTwo from './components/SlideTwo';
import SlideThree from './components/SlideThree';

class Home extends Component {
  state = {
    slide: 1
  };

  componentDidMount = (prevProps, prevState) => {
    setInterval(() => {
      this.nextSlide();
    }, 7000);
  };

  nextSlide = () => {
    var slide = this.state.slide;
    if (slide < 3) {
      slide = slide + 1;
      this.setState({
        slide
      });
    } else if (slide === 3) {
      this.setState({
        slide: 1
      });
    }
  };

  previousSlide = () => {
    var slide = this.state.slide;
    if (slide > 1) {
      slide = slide - 1;
      this.setState({
        slide
      });
    }
  };

  render() {
    const slide = this.state.slide;
    return (
      <div
        style={{
          height: '100%',
          width: '100%'
        }}
      >
        {slide === 1 ? <SlideOne /> : null}
        {slide === 2 ? <SlideTwo /> : null}
        {slide === 3 ? <SlideThree /> : null}
      </div>
    );
  }
}

export default Home;
