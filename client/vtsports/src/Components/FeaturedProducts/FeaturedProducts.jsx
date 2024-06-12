import React, {useState} from "react";
import styles from "./FeaturedProducts.module.css"
import Pagination from "./Pagination/Pagination"

const FeaturedProducts = ({randomProducts}) => {
    //console.log(randomProducts);
    const totalProducts = randomProducts.length;
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = randomProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    return (
        <div className={styles.container}>
        <div className={styles.cardsContainer}>
        {currentProducts.map((p) => (
            <div key={p.id} className={styles.card}>
            <div className={styles.imageContainer}>
            <img src={p.image} alt={p.name} className={styles.image}/>
            </div>
            <div className={styles.info}>
            <h4 className={styles.name}>{p.name}</h4>
            <p className={styles.price}>$ {p.price}</p>
            </div>
            </div>
        ))}
        </div>
        <Pagination
        totalProducts={totalProducts}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        </div>
    );
};

export default FeaturedProducts;