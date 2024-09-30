import React, { useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../assets/pexels-olly-3769747.jpg";
import img2 from "../assets/pexels-karolina-grabowska-4464482.jpg";
import img3 from "../assets/pexels-karolina-grabowska-5632402.jpg";

const CustomSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div>
      <section className="slider">
        <Carousel className="slides">
          <Carousel.Item className="slide">
            <img src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3 className="caption-title">New Arrivals</h3>
              <p className="caption-text">Check out the latest collection</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h3 className="caption-title">Exclusive Offers</h3>
              <p className="caption-text">
                Grab the best deals before they’re gone
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="slide">
            <img src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h3 className="caption-title">Seasonal Discounts</h3>
              <p className="caption-text">
                Enjoy discounts on select items this season
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
};

export default CustomSlider;
