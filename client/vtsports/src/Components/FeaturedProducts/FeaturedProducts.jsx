import React from "react";
import styles from "./FeaturedProducts.module.css"

const FeaturedProducts = ({randomProducts}) => {
    console.log(randomProducts);
    return (
        <div className={styles.container}>
        {randomProducts.map((p) => (
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
    );
};

export default FeaturedProducts;