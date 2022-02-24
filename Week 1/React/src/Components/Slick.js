import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

class Slideimg extends Component{
constructor() {
  super();
  this.state = {
    imgs: [],
  };
}

componentDidMount() {
  fetch('http://localhost:8000/findAll')
  .then(res => res.json())
  .then(imgs => this.setState({ imgs }));
}

sliders() {
  return this.state.imgs.map(data => {
    return (
      <div key={data}>
        <img alt="carousel_image" src={data.image} />
      </div>
    );
  });
}
render() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows : true
  };
  return (
    <div>
      <h1>React Slick</h1>
      <div className="slick">
        <Slider {...settings}>{this.sliders()}</Slider>
      </div>
    </div>
  );
}
}

export default Slideimg;