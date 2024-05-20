import React from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.css"

const Sidebar = ({handleOption}) => {
  const auth = useAuth();
  const user = useSelector((state) => state.user)

    return (
      <nav className={styles.sidebar}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link  className={styles.a} onClick = {() => handleOption("products")}>Ver Todos los Productos</Link>
          </li>
          <li className={styles.li}>
            <Link  className={styles.a} onClick = {() => handleOption("createProduct")}>Crear Producto</Link>
          </li>
          <li className={styles.li}>
            <Link  className={styles.a} onClick = { () => handleOption("editUser")}>Editar Datos del Usuario</Link>
          </li>
          {user.isAdmin && <li className={styles.li}>
            <Link className={styles.a} onClick = { () => handleOption("createUser")}>Crear Usuario</Link>
          </li>}
          <li className={styles.li}>
            <Link onClick = { () => auth.logOut()} className={styles.a}>Logout</Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default Sidebar;