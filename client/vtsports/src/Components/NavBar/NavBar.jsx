import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../Redux/actions";
import MenuMobile from "../MenuMobile/MenuMobile";
import styles from "./NavBar.module.css";
import { PiListBold } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const user = useSelector((state) => state.user);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const id = localStorage.getItem("userId");

  const handleMenuMobile = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (id) {
      dispatch(getUserById(id));
    }
  }, [id, dispatch]);

  return (
    <div className={styles.container}>
      <img
        src="https://res.cloudinary.com/dytke2vlw/image/upload/v1701527722/vtsport/yb2owexc1s5bfmrqpd0c.png"
        alt="logo VtSports"
        className={styles.logo}
      />
      <div className={styles.mobileMenuButtonContainer}>
        {isMobileMenuOpen ? (
          <RxCross2
            className={styles.mobileMenuButton}
            style={{ fontSize: "2rem" }}
            color="white"
            onClick={handleMenuMobile}
          />
        ) : (
          <PiListBold
            className={styles.mobileMenuButton}
            style={{ fontSize: "2rem" }}
            color="white"
            onClick={handleMenuMobile}
          />
        )}
      </div>
      <MenuMobile
        isOpen={isMobileMenuOpen}
        handleMenuMobile={handleMenuMobile}
      />
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.hide : ""}`}>
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
        {!user.id && (
          <NavLink className={`${styles.link} ${styles["link-login"]}`} to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
