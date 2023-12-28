import React from "react";
import styles from "./Products.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../Redux/actions";
import Pagination from "../../Components/Pagination/Pagination";
import ReactLoading from "react-loading";
//import HomeSLider from "../../Components/Slider/HomeSlider";
const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const productsFilter = useSelector((state) => state.productsFilter);
  console.log(products);
  // console.log(productsFilter);
  const navigate = useNavigate();
  const totalProducts = products.length;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        {!productsFilter || productsFilter.length === 0 ? (
          <div className={styles.loaderContainer}>
            <ReactLoading
              type={"spin"}
              color={"#03fc4e"}
              height={100}
              width={100}
            />
          </div>
        ) : (
          productsFilter
            .map((p) => (
              <div key={p.id} className={styles.productCard}>
                <img
                  src={p.image}
                  alt={p.name}
                  className={styles.productImage}
                />
                <h2 className={styles.productName}>{p && p.name}</h2>
                {/* <p className={styles.productDescription}>{p.description}</p> */}
                <div className={styles.productDetails}>
                  <p>
                    <strong>Material:</strong> {p && p.Type.name}
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
            ))
            .slice(firstIndex, lastIndex)
        )}
      </div>
      <div className={styles.paginacion}>
        <Pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </div>
    </div>
  );
};

export default Products;
