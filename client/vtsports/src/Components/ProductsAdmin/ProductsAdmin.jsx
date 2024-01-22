import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getProductsAdmin} from "../../Redux/actions"

const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const productsAdmin = useSelector((state) => state.productsFilterAdmin);
  console.log(productsAdmin);

  useEffect(() => {
    dispatch(getProductsAdmin())
  }, [dispatch])
  
    return (
      
  
      <div>
       <table>
        <thead>
       <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Tipo</th>
          <th>Talles</th>
          <th>Imagen</th>
          <th>Estado</th>
          <th>Editar</th>
          <th>Modif. Estado</th>
        </tr>
        </thead>
        <tbody>
        {productsAdmin && productsAdmin.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>{p.Type.name}</td>
            <td>{p.Genre.name}</td>
            <td>{" "}{p.Waists && p.Waists.map((w) => w && w.name).join(", ")}</td>
            <td>
              <img
                src={p.imagen}
                alt={p.nombre}
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