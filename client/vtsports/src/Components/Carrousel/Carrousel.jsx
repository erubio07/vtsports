import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carrousel.module.css";
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
    <div className={styles.carrouselContainer}>
      <Slider {...settings}>
        {randomProducts.map((p) => (
          <div key={p.id} className={styles.productContainer}>
            <div className={styles.imageContainer}>
              <img src={p.image} alt={p.name} className={styles.productImage} />
            </div>
            <div className={styles.productDetails}>
              <h4 className={styles.productTitle}>{p.name}</h4>
              <p className={styles.productPrice}>$ {p.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
