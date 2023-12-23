import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carrousel.module.css';
const Carrousel = ({ randomProducts }) => {
  console.log(randomProducts);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        {randomProducts.map((p) => (
          <div key={p.id} className={styles}>
            <img src={p.image} alt={p.name} />
            <h4>{p.name}</h4>
            <p>{p.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
