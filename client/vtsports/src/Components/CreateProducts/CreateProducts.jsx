import React, {useState, useEffect} from "react";
import styles from "./CreateProducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getAllGenres, getAllWaist, getAllTypes} from "../../Redux/actions";

const CreateProducts = () => {
  const dispacth = useDispatch();
  const genres = useSelector((state) => state.genres);
  // console.log(genres);
  const waist = useSelector((state) => state.waist);
  // console.log(waist);
  const types = useSelector((state) => state.types);
  // console.log(types);
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    type: "",
    genre: "",
    waists: [],
  })

  useEffect(() => {
    dispacth(getAllGenres());
    dispacth(getAllWaist());
    dispacth(getAllTypes());
  }, [dispacth]);

  return (
    <div>
      <h3> Crear Nuevo Producto </h3>
      <form>
        <label>Nombre: </label>
        <input type="text" name="name" value={input.name} placeholder="Nombre" />
        <label>Descripción: </label>
        <input type="text" name="description" value={input.description} placeholder="Descripción" />
        <label>Imagen: </label>
        <input type="file" name="image" />
        <label>Precio: </label>
        <input type="text" name="price" value={input.price} placeholder="Precio" />
        <label>Material: </label>
        <input type="text" name="type" value={input.type} placeholder="Material" />
        <label>Género: </label>
        <input type="text" name="genre" value={input.genre} placeholder="Género" />
        <label>Talles: </label>
        <div>
          <ul>
            
          </ul>
        </div>
      </form>
    </div>
  );
};

export default CreateProducts;
