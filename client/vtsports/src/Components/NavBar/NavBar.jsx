import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../Redux/actions";
import styles from "./NavBar.module.css";

function Navbar() {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispacth = useDispatch();
  const id = localStorage.getItem("userId")
  // console.log(id);

  useEffect(() => {
    if(id){

      dispacth(getUserById(id))
    }
  }, [id]);

  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
        alt="logo VtSports"
        className={styles.logo}
      />
      {user.id && (
        <NavLink className={styles.link} to="/dashboard">
          Dashboard
        </NavLink>
      )}
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/products">
        Productos
      </NavLink>
      {/* <NavLink className={styles.link} to="/about">
        Sobre Nosotros
      </NavLink> */}
      {!user.id && (
        <NavLink className={`${styles.link} ${styles['link-login']}`} to="/login">
          Login
        </NavLink>
      )}
    </div>
  );
}

export default Navbar;
