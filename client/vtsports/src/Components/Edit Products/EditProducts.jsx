import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres, getAllWaist, getAllTypes } from "../../Redux/actions";
import axios from "axios";
import Button from "react-bootstrap/Button";
import styles from "./EditProducts.module.css";
import Swal from "sweetalert2";

const EditProducts = ({ productModal }) => {
  console.log("componente montado");
  console.log(productModal);
  const id = productModal.id;
  console.log(id);
  const dispacth = useDispatch();
  const genres = useSelector((state) => state.genres);
  console.log(genres);
  const waist = useSelector((state) => state.waist);
  // console.log(waist);
  const types = useSelector((state) => state.types);
  // console.log(types);
  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
    type: null,
    genre: null,
    waists: [],
  });

  console.log(input);

  const getData = async () => {
    try {
      const data = await axios.get(`http://localhost:3001/products/${id}`);
      const dataProduct = data.data;
      console.log(dataProduct);
      setInput({
        name: dataProduct.name,
        description: dataProduct.description,
        image: dataProduct.image,
        price: dataProduct.price,
        type: {
          id: dataProduct.Type.id,
          name: dataProduct.Type.name,
        },
        genre: {
          id: dataProduct.Genre.id,
          name: dataProduct.Genre.name,
        },
        waists: dataProduct.Waists.map((w) => ({
          id: w.id,
          name: w.name,
        })),
      });
    } catch (error) {
      console.log("error en get data;", error.message);
    }
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
    // console.log(e.target.value);
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
    const selectedWaistId = parseInt(e.target.value, 10); // Convertir a número
    console.log(selectedWaistId);
    const selectedWaist = waist.find((w) => w.id === selectedWaistId);

    if (selectedWaist) {
      setInput({
        ...input,
        waists: [...input.waists, selectedWaist],
      });
    }
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

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      if (
        !input.name ||
        !input.description ||
        !input.image ||
        !input.price ||
        !input.type ||
        !input.genre ||
        !input.waists
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
      console.log(productData);

      await axios.put("http://localhost:3001/products", productData);
      setInput({
        name: "",
        description: "",
        image: "",
        price: "",
        type: "",
        genre: "",
        waists: [],
      });
      Swal.fire({
        icon: "success",
        title: "OK",
        text: "Producto creado con éxito",
      });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect cargado");
    getData();
    dispacth(getAllGenres());
    dispacth(getAllWaist());
    dispacth(getAllTypes());
  }, [dispacth]);

  return (
    <div>
      <form className={styles.form} onSubmit={(e) => handleUpdateProduct(e)}>
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
          <option value={input.type ? input.type.id : "-"}>
            {input.type ? input.type.name : "-"}
          </option>
          {types.map((t) => (
            <option value={t.id} key={t.id}>
              {t.name}
            </option>
          ))}
        </select>
        <label className={styles.label}>Género: </label>
        <select className={styles.select} onChange={handleGenre}>
          <option value={input.genre ? input.genre.id : "-"}>
            {input.genre ? input.genre.name : "-"}
          </option>
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
        <Button type="submit" variant="primary" className={styles.button}>
          Editar Producto
        </Button>
      </form>
    </div>
  );
};

export default EditProducts;
