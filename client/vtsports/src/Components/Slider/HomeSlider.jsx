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
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701613649/vtsport/feszvp8l9sstgql2vjtf.jpg"
            alt="imagen1"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>¡SENTITE COMO EN CASA!</h1>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1720119588/vtsport/ormjmonltgnkixdiyydg.jpg"
            alt="imagen2"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>ENTENDEMOS TU PASION</h1>
            <p>¡Por eso estamos aqui!</p>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <img
            src="https://res.cloudinary.com/dytke2vlw/image/upload/v1720118864/vtsport/wp9itym0woyocii8za2g.jpg"
            alt="imagen3"
            className={styles.image}
          />
          <div className={styles.textContainer}>
            <h1>¡RINDE CON ESTILO!</h1>
            <p>¡COMPRA AHORA!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSLider;
