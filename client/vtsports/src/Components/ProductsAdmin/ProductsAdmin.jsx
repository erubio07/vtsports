import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsAdmin} from "../../Redux/actions"
import styles from "./ProductsAdmin.module.css"

const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const productsAdmin = useSelector((state) => state.productsFilterAdmin);
  console.log(productsAdmin);

  useEffect(() => {
    dispatch(getProductsAdmin())
  }, [dispatch])
  
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
        {productsAdmin && productsAdmin.map((p) => (
          <tr key={p.id}>
            <td className={styles.td}>{p.id}</td>
            <td className={styles.td}>{p.name}</td>
            <td className={styles.td}>{p.description}</td>
            <td className={styles.td}>{p.Genre.name}</td>
            <td className={styles.td}>{p.Type.name}</td>
            <td className={styles.td}>{" "}{p.Waists && p.Waists.map((w) => w && w.name).join(", ")}</td>
            <td className={styles.td}>
              <img
                src={p.image}
                alt={p.name}
                style={{ maxWidth: '20px', maxHeight: '20px' }}
              />
            </td>
            <td>
              {p.deletedAt ? (
                <span>No disponible</span>
              ) : (
                <span>Disponible</span>
              )}
            </td>
          </tr>
        ))}
        </tbody>
       </table>
        
      </div>
      
    );
  };
  
  export default ProductsAdmin;