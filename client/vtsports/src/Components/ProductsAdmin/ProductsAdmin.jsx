import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAdmin } from "../../Redux/actions";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import styles from "./ProductsAdmin.module.css";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaTrashRestore } from "react-icons/fa";
import Swal from "sweetalert2";
import EditProducts from "../Edit Products/EditProducts";

const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const productsAdmin = useSelector((state) => state.productsFilterAdmin);
  console.log(productsAdmin);
  const [show, setShow] = useState(false);
  const [productModal, setProductModal] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (p) => {
    setProductModal(p);
    setShow(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Seguro quieres eliminar el producto",
      text: "Podrás revertir este cambio desde la opción Modificar Estado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Borrar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3001/products/${id}`);
        Swal.fire({
          title: "Borrado!",
          text: "Producto borrado con éxito!",
          icon: "success",
        });
      }
      setTimeout(() => {
        dispatch(getProductsAdmin());
      }, "2000");
    });
  };

  const handleRestore = (id) => {
    Swal.fire({
      title: "Seguro quieres restaurar el producto",
      text: "Podrás revertir este cambio desde la opción Modificar Estado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Restaurar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`http://localhost:3001/${id}`);
        Swal.fire({
          title: "Restaurado!",
          text: "Producto restaurado con éxito!",
          icon: "success",
        });
      }
      setTimeout(() => {
        dispatch(getProductsAdmin());
      }, "2000");
    });
  };

  useEffect(() => {
    dispatch(getProductsAdmin());
  }, [dispatch]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>ID</th>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>Descripción</th>
            <th className={styles.th}>Género</th>
            <th className={styles.th}>Tipo</th>
            <th className={styles.th}>Talles</th>
            <th className={styles.th}>Imagen</th>
            <th className={styles.th}>Estado</th>
            <th className={styles.th}>Editar</th>
            <th className={styles.th}>Modif. Estado</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {productsAdmin &&
            productsAdmin.map((p) => (
              <tr key={p.id}>
                <td className={styles.td}>{p.id}</td>
                <td className={styles.td}>{p.name}</td>
                <td className={styles.td}>{p.description}</td>
                <td className={styles.td}>{p.Genre.name}</td>
                <td className={styles.td}>{p.Type.name}</td>
                <td className={styles.td}>
                  {" "}
                  {p.Waists && p.Waists.map((w) => w && w.name).join(", ")}
                </td>
                <td className={styles.td}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ maxWidth: "20px", maxHeight: "20px" }}
                  />
                </td>
                <td>
                  {p.deletedAt ? (
                    <span>No disponible</span>
                  ) : (
                    <span>Disponible</span>
                  )}
                </td>
                <td className={styles.td}>
                  <button
                    className={styles.button}
                    onClick={() => handleShow(p)}
                  >
                    <FaRegEdit style={{ width: "20px", height: "20px" }} />
                  </button>
                </td>
                <td className={styles.td}>
                  {p.deletedAt ? (
                    <button
                      className={styles.button}
                      onClick={() => {
                        handleRestore(p.id);
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
                        handleDelete(p.id);
                      }}
                    >
                      <AiFillDelete style={{ width: "20px", height: "20px" }} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditProducts productModal={productModal} setShow={setShow} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </table>
    </div>
  );
};

export default ProductsAdmin;
