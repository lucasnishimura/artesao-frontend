import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import banner1 from './img/banner_slide_alimentacao.jpg';
import banner2 from './img/banner_slide_indicar.jpg';
import banner3 from './img/banner_slide_protecao.jpg';
import banner4 from './img/banner_slide_sobre.jpg';
 
class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showThumbs={false}>
        <div>
          <img src={banner1}/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={banner2}/>
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={banner3}/>
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={banner4}/>
          <p className="legend">Legend 4</p>
        </div>
        
      </Carousel>
    );
  }
};

export default DemoCarousel;