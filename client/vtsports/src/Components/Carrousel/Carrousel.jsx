import React from "react";
import Slider from "react-slick";

const Carrousel = ({ randomProducts }) => {
  console.log(randomProducts);
  const settings = {
    dots: true,
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
          <div key={p.id}>
            <img src={p.image} alt={p.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
