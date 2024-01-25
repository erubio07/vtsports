import React, {useState, useEffect} from "react";
import styles from "./CreateProducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import {getAllGenres, getAllWaist, getAllTypes} from "../../Redux/actions";
import Button from 'react-bootstrap/Button';

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

  console.log(input);

  const handleChange = (e) => {
    setInput ({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleTypes = (e) => {
    setInput({
      ...input,
      type: e.target.value
    })
  }

  const handleGenre = (e) => {
    setInput({
      ...input,
      genre: e.target.value
    })
  }

  const handleWaists = (e) => {
    setInput({
      ...input,
      waists: [...input.waists, e.target.value]
    })
  }

  const onClose = (w) => {
    setInput({
      ...input,
      waists: input.waists.filter((i) => i !== w),
    });
  };

  useEffect(() => {
    dispacth(getAllGenres());
    dispacth(getAllWaist());
    dispacth(getAllTypes());
  }, [dispacth]);

  return (
    <div className={styles.container}>      
      <h3> Crear Nuevo Producto </h3>
      <form className={styles.form}>
        <label className={styles.label}>Nombre: </label>
        <input className={styles.input} type="text" name="name" value={input.name} placeholder="Nombre" onChange={handleChange}/>
        <label className={styles.label}>Descripción: </label>
        <input className={styles.input} type="text" name="description" value={input.description} placeholder="Descripción" onChange={handleChange}/>
        <label className={styles.label}>Imagen: </label>
        <input className={styles.input} type="file" name="image" />
        <label className={styles.label}>Precio: </label>
        <input className={styles.input} type="text" name="price" value={input.price} placeholder="Precio" onChange={handleChange}/>
        {/* De acá para abajo van Select */}
        <label className={styles.label}>Material: </label>
        <select className={styles.select} onChange={handleTypes}>
          <option value="vacio">-</option>
          {types.map((t) => (
            <option value={t.name} key={t.id}>{t.name}</option>
          ))}
        </select>
        <label className={styles.label}>Género: </label>
        <select className={styles.select} onChange={handleGenre}>
          <option value="vacio">-</option>
          {genres.map((g) => (
            <option value={g.name} key={g.id}>{g.name}</option>
          ))}
        </select>
        <label className={styles.label}>Talles: </label>
        <select className={styles.select} onChange={handleWaists}>
          <option value="vacio">-</option>
          {waist.map((w) => (
            <option value={w.name} key={w.id}>{w.name}</option>
          ))}
        </select>
        <div>
        <ul className={styles.selectedWaists}>
            <li className={styles.selectedWaistsItem}>
              {input.waists.map((w) => (
                <div key={w}>
                  {w}
                  <button
                    className={styles.selectedWaistsButton}
                    onClick={() => onClose(w)}
                    type="button"
                  >
                    X
                  </button>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <Button variant="primary" className={styles.button}>Crear Producto</Button>
      </form>
    </div>
  );
};

export default CreateProducts;
