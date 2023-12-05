import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./HomeSlider.module.css";

const HomeSLider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701613649/vtsport/omowheswuyrhrcr9hm6y.jpg"
            alt="imagen1"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>Título</h1>
            <p>Descripción de imagen 1</p>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701613649/vtsport/feszvp8l9sstgql2vjtf.jpg"
            alt="imagen2"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>Título de la imagen 2</h1>
            <p>Descripción de la imagen 2</p>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701613650/vtsport/y77k4s0sttv4llhenp8t.jpg"
            alt="imagen3"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>Título de la imagen 3</h1>
            <p>Descripción de la imagen 3</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSLider;
