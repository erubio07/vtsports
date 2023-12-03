import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
          alt="logo VtSports"
          className={styles.logo}
        />
      </div>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/products">
        Productos
      </NavLink>
      <NavLink className={styles.link} to="/about">
        Sobre Nosotros
      </NavLink>
      <NavLink className={styles.link} to="/login">
        Login
      </NavLink>
    </div>
  );
}

export default Navbar;
