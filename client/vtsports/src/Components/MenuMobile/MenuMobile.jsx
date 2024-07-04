import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuMobile.module.css";

const MenuMobile = ({ isOpen, handleMenuMobile }) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <img
        src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
        alt="logo VtSports"
        className={styles.logo}
      />
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/products"
      >
        Productos
      </NavLink>
    </div>
  );
};

export default MenuMobile;