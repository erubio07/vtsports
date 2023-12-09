import React from "react";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  console.log(products);
  // console.log(productsFilter);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      {productsFilter.map((p) => (
        <div key={p.id}>
          <img src={p.image} alt={p.name} />
          <h2>{p.name}</h2>
          <p>{p.description}</p>
          <h3>Material:</h3>
          <p>{p.Type.name}</p>
          <h3>Talles:</h3>
          {p.Waists.map((w) => {
            return <p>{w.name}</p>;
          })}
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
