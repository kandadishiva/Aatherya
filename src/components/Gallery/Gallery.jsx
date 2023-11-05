import React from 'react'
import './Gallery.css'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Gallery1 from "../../static/Images/slide2.jpg";
import Gallery2 from "../../static/Images/slide3.jpg";
import Gallery3 from "../../static/Images/Gallery3.jpg";
import Gallery4 from "../../static/Images/Gallery4.jpg";

const Gallery = () => {
    return (
        <div className="portfolio" id="portfolio">
          {/* heading */}
          {/*<span >Recent Gallery</span>*/}
          {<span>Gallery</span>}
    
          {/* slider */}
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            grabCursor={true}
            className="portfolio-slider"
          >
            <SwiperSlide>
              <img src={Gallery1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Gallery2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}

export default Gallery;