import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useSelector } from "react-redux";
import styles from "./SideBar.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FcAcceptDatabase } from "react-icons/fc";
import { FcPlus } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcGoodDecision } from "react-icons/fc";
import { FcApprove } from "react-icons/fc";
import { FcDownload } from "react-icons/fc";

const Sidebar = ({ handleOption }) => {
  const auth = useAuth();
  const user = useSelector((state) => state.user);

  return (
    <nav className={styles.sidebar}>
      <div className={styles.profile}>
        {user.image ? (
          <img src={user.image} alt="Perfil" className={styles.profileImage} />
        ) : (
          <FaCircleUser className={styles.profileIcon} />
        )}
        <div className={styles.userName}>
          {user.name} {user.surname}
        </div>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link className={styles.a} onClick={() => handleOption("products")}>
            <FcAcceptDatabase className={styles.icon} /> Ver Todos los Productos
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={styles.a}
            onClick={() => handleOption("createProduct")}
          >
            <FcPlus className={styles.icon} /> Crear Producto
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} onClick={() => handleOption("editUser")}>
            <FcApprove className={styles.icon} /> Editar Datos del Usuario
          </Link>
        </li>
        {user.isAdmin && (
          <li className={styles.li}>
            <Link
              className={styles.a}
              onClick={() => handleOption("createUser")}
            >
              <FcGoodDecision className={styles.icon} /> Crear Usuario
            </Link>
          </li>
        )}
        {user.isAdmin && (
          <li className={styles.li}>
            <Link
              className={styles.a}
              onClick={() => handleOption("viewUsers")}
            >
              <FcConferenceCall className={styles.icon} /> Ver Usuarios
            </Link>
          </li>
        )}
        {user.isAdmin && (
          <li className={styles.li}>
            <Link className={styles.a} onClick={() => handleOption("backup")}>
              <FcDownload className={styles.icon} /> BackUp
            </Link>
          </li>
        )}

       
          <li className={styles.li}>
            <Link onClick={() => auth.logOut()} className={styles.a}>
              <RiLogoutCircleLine className={styles.icon} /> Logout
            </Link>
          </li>
        
      </ul>
    </nav>
  );
};

export default Sidebar;
