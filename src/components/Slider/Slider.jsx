import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Make sure you have this import

import './Slider.css'; // Your custom CSS file
import 'animate.css'; // If you're using animate.css for animations
import slide1 from '../../static/Images/slide1.jpg';
import slide2 from '../../static/Images/slide2.jpg';
import slide3 from '../../static/Images/slide3.jpg';

const Slider = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      new window.bootstrap.Carousel(carouselRef.current, {
        interval: 5000 // Set your desired interval here
      });
    }
  }, []);

  return (
    <section id="hero">
      <div className="hero-container">
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          ref={carouselRef}
        >
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            
            <div className="carousel-item active" style={{ backgroundImage: `url(${slide1})` }}>
            <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Aatherya Educational Trust</span></h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Apply</a>
                </div>
              </div>
            </div>

            
            <div className="carousel-item" style={{ backgroundImage: `url(${slide2})` }}>
            <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">Aatherya Educational Trust</h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Apply</a>
                </div>
              </div>
            </div>

            
            <div className="carousel-item" style={{ backgroundImage: `url(${slide3})` }}>
            <div className="carousel-container">
                <div className="carousel-content container">
                  <h2 className="animate__animated animate__fadeInDown">Aatherya Educational Trust</h2>
                  <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Apply</a>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Slider;
