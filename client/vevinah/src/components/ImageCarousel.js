import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Carousel1 from '../assets/slide-image1.jpg';
import Carousel2 from '../assets/slide-image3.jpg';
import Carousel3 from '../assets/slide-image4.jpg';
import Carousel4 from '../assets/slide-image2.jpg';
import logo from '../assets/chai-vevinah-logo.png';
import "../App.css";

const ImageCarousel = () => {
  const images = [Carousel1, Carousel2, Carousel3, Carousel4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setAnimationClass('');
      }, 220); 
    }, 6000); 
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="carousel-section">
      <div className="image-carousel">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className={animationClass} />
        <div className="carousel-tagline-overlay">
          <h4>Every Dish Tells A Story</h4>
          <h2>
            Taste the Tradition,
            <br />
            Feel the Innovation
          </h2>
        </div>

        <div className="carousel-location-overlay">
          <h3>
            Open Today Till 9pm,
            <br />
            Located at Lusengeti Shopping Center
          </h3>
        </div>

        <div className="carousel-logo-overlay">
          <img src={logo} alt="vevinah" />
        </div>

        <Link to="/menu" className="carousel-link">
          Check out Menu
        </Link>
      </div>
    </div>
  );
};

export default ImageCarousel;
