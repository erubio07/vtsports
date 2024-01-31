import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres, getAllWaist, getAllTypes } from "../../Redux/actions";
import axios from "axios";
import Button from "react-bootstrap/Button";
import styles from "./EditProducts.module.css";

const EditProducts = ({ productModal }) => {
  console.log(productModal);

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
  });

  console.log(input);

  const getData = () => {
    setInput({
      ...input,
      name: productModal.name,
      description: productModal.description,
      image: productModal.image,
      price: productModal.price,
      type: productModal.Type.id,
      genre: productModal.Genre.id,
      waists: productModal.Waists.map((i) => i.id || []),
    });
  };
  const preset_key = "ml_default";
  const cloud_name = "dytke2vlw";

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleTypes = (e) => {
    setInput({
      ...input,
      type: e.target.value,
    });
  };

  const handleGenre = (e) => {
    setInput({
      ...input,
      genre: e.target.value,
    });
  };

  const handleWaists = (e) => {
    setInput({
      ...input,
      waists: [...input.waists, e.target.value],
    });
  };

  const onClose = (w) => {
    setInput({
      ...input,
      waists: input.waists.filter((i) => i !== w),
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
        formData
      )
      .then((res) =>
        setInput({
          ...input,
          image: res.data.secure_url,
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    dispacth(getAllGenres());
    dispacth(getAllWaist());
    dispacth(getAllTypes());
    getData();
  }, [dispacth]);

  return (
    <div>
      <form className={styles.form}>
        <label className={styles.label}>Nombre: </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={input.name}
          placeholder="Nombre"
          onChange={handleChange}
        />
        <label className={styles.label}>Descripción: </label>
        <input
          className={styles.input}
          type="text"
          name="description"
          value={input.description}
          placeholder="Descripción"
          onChange={handleChange}
        />
        <label className={styles.label}>Imagen: </label>
        <input
          className={styles.input}
          type="file"
          name="image"
          onChange={handleImage}
        />
        {input.image && (
          <div className={styles.thumbnailContainer}>
            <label className={styles.label}>Preview:</label>
            <img src={input.image} alt="Preview" className={styles.img} />
          </div>
        )}
        <label className={styles.label}>Precio: </label>
        <input
          className={styles.input}
          type="text"
          name="price"
          value={input.price}
          placeholder="Precio"
          onChange={handleChange}
        />
        {/* De acá para abajo van Select */}
        <label className={styles.label}>Material: </label>
        <select className={styles.select} onChange={handleTypes}>
          <option value="vacio">-</option>
          {types.map((t) => (
            <option value={t.id} key={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <label className={styles.label}>Género: </label>
        <select className={styles.select} onChange={handleGenre}>
          <option value="vacio">-</option>
          {genres.map((g) => (
            <option value={g.id} key={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        <label className={styles.label}>Talles: </label>
        <select className={styles.select} onChange={handleWaists}>
          <option value="vacio">-</option>
          {waist.map((w) => (
            <option value={w.id} key={w.id}>
              {w.name}
            </option>
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
        <Button type="submit" variant="primary" className={styles.button}>
          Editar Producto
        </Button>
      </form>
    </div>
  );
};

export default EditProducts;
