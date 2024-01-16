import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <h3>Creado por EzeRubio y MaxLucero para </h3>
        <img
          className={styles.img}
          src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
          alt="vtSports"
        />
      </div>
    </div>
  );
}

export default Footer;
