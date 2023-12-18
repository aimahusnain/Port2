import React from 'react';
import Slider from 'react-slick';
import FeaturedPosts from './(blog)/Home/Featured';

const Carousel = ({ blogs }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <FeaturedPosts blogs={blogs} index={1} />
        </div>
        <div>
          <FeaturedPosts blogs={blogs} index={2} />
        </div>
      </Slider>
    </div>
  );
};

// Define your custom Next and Prev Arrow components here
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    Next
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    Prev
  </div>
);

export default Carousel;
