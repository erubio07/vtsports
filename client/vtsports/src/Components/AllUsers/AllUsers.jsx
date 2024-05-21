import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../Redux/actions";
import { AiFillDelete } from "react-icons/ai";
import { FaTrashRestore } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import axios from "axios";
import styles from "./AllUsers.module.css"
import Swal from "sweetalert2";

const AllUsers = () => {
const dispatch = useDispatch();
const users = useSelector((state) => state.userList);
console.log(users);

const handleUserDelete = (id) => {
  Swal.fire({
    title: "Seguro quieres eliminar el usuario",
    text: "Podrás revertir este cambio desde la opción Modificar Estado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Borrar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(`https://vtsports.onrender.com/user/${id}`);
      Swal.fire({
        title: "Borrado!",
        text: "Usuario borrado con éxito!",
        icon: "success",
      });
    }
    setTimeout(() => {
      dispatch(getAllUser());
    }, "2000");
  });
};

const handleUserRestore = (id) => {
  Swal.fire({
    title: "Seguro quieres restaurar el usuario",
    text: "Podrás revertir este cambio desde la opción Modificar Estado",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Restaurar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.put(`https://vtsports.onrender.com/user/${id}`);
      Swal.fire({
        title: "Restaurado!",
        text: "Usuario restaurado con éxito!",
        icon: "success",
      });
    }
    setTimeout(() => {
      dispatch(getAllUser());
    }, "2000");
  });
}

const handleAdminUpdate = (id) => {
  Swal.fire({
    title: "Seguro quieres dar/quitar privilegios de administrador al usuario?",
    text: "Podrás revertir este cambio desde la opción Modif. Admin.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, Modificar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.put("https://vtsports.onrender.com/user/update/admin", {id});
      Swal.fire({
        title: "Modificado!",
        text: "Usuario modificado con éxito!",
        icon: "success",
      });
    }
    setTimeout(() => {
      dispatch(getAllUser());
    }, "2000");
  });
}

useEffect(() => {
    dispatch(getAllUser());
}, [])

    return(
        <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>Apellido</th>
            <th className={styles.th}>Mail</th>
            <th className={styles.th}>Username</th>
            <th className={styles.th}>Imagen</th>
            <th className={styles.th}>Estado</th>
            <th className={styles.th}>Modif. Estado</th>
            <th className={styles.th}>Administrador</th>
            <th className={styles.th}>Modif. Admin.</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {users &&
            users.map((u) => (
              <tr key={u.id}>
                <td className={styles.td}>{u.id}</td>
                <td className={styles.td}>{u.name}</td>
                <td className={styles.td}>{u.surname}</td>
                <td className={styles.td}>{u.mail}</td>
                <td className={styles.td}>{u.username}</td>
                <td className={styles.td}>
                {u.image ? (
                    <img
                      src={u.image}
                      alt={u.name}
                      className={styles.userImage}
                    />
                  ) : (
                    <FaCircleUser className={styles.userIcon} />
                  )}
                  
                </td>
                <td>
                  {u.deletedAt ? (
                    <span>No disponible</span>
                  ) : (
                    <span>Disponible</span>
                  )}
                </td>
                <td className={styles.td}>
                  {u.deletedAt ? (
                    <button
                      className={styles.button}
                      onClick={ () => {
                        handleUserRestore(u.id)
                      }}
                    >
                      <FaTrashRestore
                        style={{ width: "20px", height: "20px" }}
                      />
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleUserDelete(u.id);
                      }}
                    >
                      <AiFillDelete style={{ width: "20px", height: "20px" }} />
                    </button>
                  )}
                </td>
                <td>
                  {u.isAdmin ? (
                    <span>Sí</span>
                  ) : (
                    <span>No</span>
                  )}
                </td>
                <td className={styles.td}>
                  {u.isAdmin ? (
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleAdminUpdate(u.id)
                      }}
                    >
                      <MdOutlineAdminPanelSettings
                        style={{ width: "20px", height: "20px" }}
                      />
                    </button>
                  ) : (
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleAdminUpdate(u.id)
                      }}
                    >
                      <MdAdminPanelSettings style={{ width: "20px", height: "20px" }} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
        
      </table>
    </div>
    )
}

export default AllUsers;