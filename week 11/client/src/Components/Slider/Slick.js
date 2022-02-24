import React, { Component } from 'react';
import Slider from 'react-slick';
// import imgs from './images';
import "bootstrap/dist/css/bootstrap.min.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../CSS/Slick.css';

class Slideimg extends Component{
constructor() {
  super();
  this.state = {
    imgs: [],
  };
}

componentDidMount() {
  fetch('http://localhost:9000/sliderImage',)
  .then(res => res.json())
  .then(imgs => this.setState({ imgs }));
}

sliders() {
  return this.state.imgs.map(data => {
    return (
      <div key={data}>
        <a href={data.path}><img alt="carousel_image" src={data.image} /></a>
      </div>
    );
  });
}
render() {
  const settings = {
    dots: true,
    lazyLoad:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // fade:true,
    slidesToScroll: 1,
    autoplay: true,
    // arrows : true
  };
  return (
    <div className='slick-container'>
      <div className="slick">
        <Slider {...settings}>{this.sliders()}</Slider>
      </div>
    </div>
  );
}
}

export default Slideimg;