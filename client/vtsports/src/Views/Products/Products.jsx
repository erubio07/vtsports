import React from "react";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../Redux/actions";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  console.log(products);
  // console.log(productsFilter);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        {productsFilter.map((p) => (
          <div key={p.id} className={styles.productCard}>
            <img src={p.image} alt={p.name} className={styles.productImage} />
            <h2 className={styles.productName}>{p.name}</h2>
            {/* <p className={styles.productDescription}>{p.description}</p> */}
            <div className={styles.productDetails}>
              <p>
                <strong>Material:</strong> {p.Type.name}
              </p>

              <p>
                <strong>Talles:</strong>{" "}
                {p.Waists.map((w) => w.name).join(", ")}
              </p>
            </div>
            <p className={styles.productPrice}>$ {p.price}</p>
            <button onClick={() => navigate(`/products/${p.id}`)}>
              Detalles
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
