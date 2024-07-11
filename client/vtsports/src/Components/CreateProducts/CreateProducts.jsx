import React, { useState, useEffect } from "react";
import styles from "./CreateProducts.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllGenres,
  getAllWaist,
  getAllTypes,
  createProduct,
} from "../../Redux/actions";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

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
  });

  // console.log(input);

  const [errors, setErrors] = useState({
    name: true,
    description: true,
    image: true,
    price: true,
    type: true,
    genre: true,
    waists: true,
  });

  console.log(errors);

  const preset_key = "ml_default";
  const cloud_name = "dytke2vlw";

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: !e.target.value
    })
  };

  const handleTypes = (e) => {
    setInput({
      ...input,
      type: e.target.value,
    });
    setErrors({
      ...errors,
      type: false
    })
  };

  const handleGenre = (e) => {
    setInput({
      ...input,
      genre: e.target.value,
    });
    setErrors({
      ...errors,
      genre: false
    })
  };

  const handleWaists = (e) => {
    const selectedWaistId = parseInt(e.target.value, 10); // Convertir a número
    // console.log(selectedWaistId);
    const selectedWaist = waist.find((w) => w.id === selectedWaistId);

    if (selectedWaist) {
      setInput({
        ...input,
        waists: [...input.waists, selectedWaist],
      });
      setErrors({
        ...errors,
        waists: false
      })
    }
  };

  const onClose = (w) => {
    const updatedWaists = input.waists.filter((i) => i !== w);
  
    setInput({
      ...input,
      waists: updatedWaists,
    });
  
    setErrors({
      ...errors,
      waists: updatedWaists.length === 0,
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
          image: res.data.secure_url
        })
      )
      .catch((err) => console.log(err));
      setErrors({
        ...errors,
        image: false
      })
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.description ||
      !input.image ||
      !input.price ||
      !input.type ||
      !input.genre ||
      !input.waists.length === 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos deben estar completos!",
      });
      return;
    }
    const productData = {
      ...input,
      waists: input.waists.map((waist) => waist.id),
    };

    await dispacth(createProduct(productData));
    setInput({
      name: "",
      description: "",
      image: "",
      price: "",
      type: "",
      genre: "",
      waists: [],
    });
    setErrors({
    name: true,
    description: true,
    image: true,
    price: true,
    type: true,
    genre: true,
    waists: true,
    })
    Swal.fire({
      icon: "success",
      title: "OK",
      text: "Producto creado con éxito",
    });
  };

  const isFormValid = () => {
    return (
      !errors.name &&
      !errors.description &&
      !errors.image &&
      !errors.price &&
      !errors.type &&
      !errors.genre &&
      !errors.waists
    )
  }

  useEffect(() => {
    dispacth(getAllGenres());
    dispacth(getAllWaist());
    dispacth(getAllTypes());
  }, [dispacth]);

  return (
    <div className={styles.container}>
      <h3> Crear Nuevo Producto </h3>
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleCreateProduct(e);
        }}
      >
        <label className={styles.label}>Nombre: </label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={input.name}
          placeholder="Nombre"
          onChange={handleChange}
        />
        {errors.name && <p className={styles.errorText}>El campo es obligatorio.</p>}
        <label className={styles.label}>Descripción: </label>
        <input
          className={styles.input}
          type="text"
          name="description"
          value={input.description}
          placeholder="Descripción"
          onChange={handleChange}
        />
        {errors.description && <p className={styles.errorText}>El campo es obligatorio.</p>}
        <div className={styles.fileUpload}>
        <label className={styles.label}>Imagen: </label> <br></br>
        <input
          className={styles.input2}
          type="file"
          name="image"
          onChange={handleImage}
        />
        {errors.image && <p className={styles.errorText}>El campo es obligatorio.</p>}
        {input.image && (
          <div className={styles.thumbnailContainer}>
            <label className={styles.label}>Preview:</label>
            <img src={input.image} alt="Preview" className={styles.img} />
          </div>
        )}
        
        </div>
        <label className={styles.label}>Precio: </label>
        <input
          className={styles.input}
          type="text"
          name="price"
          value={input.price}
          placeholder="Precio"
          onChange={handleChange}
        />
        {errors.price && <p className={styles.errorText}>El campo es obligatorio.</p>}
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
        {errors.type && <p className={styles.errorText}>El campo es obligatorio.</p>}
        <label className={styles.label}>Género: </label>
        <select className={styles.select} onChange={handleGenre}>
          <option value="vacio">-</option>
          {genres.map((g) => (
            <option value={g.id} key={g.id}>
              {g.name}
            </option>
          ))}
        </select>
        {errors.genre && <p className={styles.errorText}>El campo es obligatorio.</p>}
        <label className={styles.label}>Talles: </label>
        <select className={styles.select} onChange={handleWaists}>
          <option value="vacio">-</option>
          {waist.map((w) => (
            <option value={w.id} key={w.id}>
              {w.name}
            </option>
          ))}
        </select>
        {errors.waists && <p className={styles.errorText}>El campo es obligatorio.</p>}
        <div>
          <ul className={styles.selectedWaists}>
            <li className={styles.selectedWaistsItem}>
              {input.waists.map((w) => (
                <div key={w.id}>
                  
                  {w.name}
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
        <Button type="submit" variant="primary" className={styles.button} disabled={!isFormValid()}>
          Crear Producto
        </Button>
      </form>
    </div>
  );
};

export default CreateProducts;
