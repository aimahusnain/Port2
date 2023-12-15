import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

const ImageCarousel = ({ images }) => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div key={index} className="swiper-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default ImageCarousel;
