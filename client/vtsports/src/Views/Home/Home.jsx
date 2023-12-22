import React from "react";
import styles from "./Home.module.css";
import HomeSLider from "../../Components/Slider/HomeSlider";
import Divisor from "../../Components/Divisor/Divisor";
import Carrousel from "../../Components/Carrousel/Carrousel";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomProducts } from "../../Redux/actions";
const Home = () => {
  const dispatch = useDispatch();
  const randomProducts = useSelector((state) => state.randomProducts);
  // console.log(randomProducts);

  useEffect(() => {
    dispatch(getRandomProducts());
  }, [dispatch]);
  return (
    <div>
      <HomeSLider />
      <Divisor />
      <Carrousel randomProducts={randomProducts} />
    </div>
  );
};

export default Home;
