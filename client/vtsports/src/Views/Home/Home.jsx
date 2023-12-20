import React from "react";
import styles from "./Home.module.css";
import HomeSLider from "../../Components/Slider/HomeSlider";
import Divisor from "../../Components/Divisor/Divisor";
const Home = () => {
  return (
    <div>
      <HomeSLider />
      <Divisor />
    </div>
  );
};

export default Home;
