import React from "react";
import { Link } from 'react-router-dom';
import styles from "./SideBar.module.css"

const Sidebar = () => {
    return (
      <nav className={styles.sidebar}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/dashboard/products" className={styles.a}>Ver Todos los Productos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard/create-product" className={styles.a}>Crear Producto</Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard/edit-user" className={styles.a}>Editar Datos del Usuario</Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard/change-password" className={styles.a}>Cambiar Contraseña</Link>
          </li>
          <li className={styles.li}>
            <Link to="/dashboard/logout" className={styles.a}>Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default Sidebar;