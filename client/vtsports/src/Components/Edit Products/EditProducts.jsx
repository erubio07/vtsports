import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllGenres, getAllWaist, getAllTypes } from "../../Redux/actions";
import axios from "axios";
import Button from "react-bootstrap/Button";
import styles from "./EditProducts.module.css";
import Swal from "sweetalert2";

const EditProducts = ({ productModal, setShow }) => {
  // console.log("componente montado");
  // console.log(setShow);
  // console.log(productModal);
  const id = productModal.id;
  // console.log(id);
  const dispacth = useDispatch();
  const genres = useSelector((state) => state.genres);
  // console.log(genres);
  const waist = useSelector((state) => state.waist);
  // console.log(waist);
  const types = useSelector((state) => state.types);
  // console.log(types);
  const [input, setInput] = useState({
    id: null,
    name: "",
    description: "",
    image: "",
    price: "",
    type: null,
    genre: null,
    waists: [],
  });
  const forceUpdate = React.useReducer((bool) => !bool)[1]

  // console.log(input);

  const getData = async () => {
    try {
      const data = await axios.get(`https://nearby-gilberta-vtsports-7339cb89.koyeb.app/products/${id}`);
      const dataProduct = data.data;
      // console.log(dataProduct);
      setInput({
        id: dataProduct.id,
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
    const selectedTypeId = parseInt(e.target.value, 10); // Convertir a número
    // console.log(selectedTypeId);
    const selectedType = types.find((w) => w.id === selectedTypeId);
    // console.log(selectedType);
    if (selectedType) {
      setInput({
        ...input,
        type: {
          id: selectedType.id,
          name: selectedType.name,
        },
      });
    }
  };

  const handleGenre = (e) => {
    const selectedGenreId = parseInt(e.target.value, 10); // Convertir a número
    // console.log(selectedGenreId);
    const selectedGenre = genres.find((w) => w.id === selectedGenreId);
    // console.log(selectedGenre);
    if (selectedGenre) {
      setInput({
        ...input,
        genre: {
          id: selectedGenre.id,
          name: selectedGenre.name,
        },
      });
    }
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
    }
  };

  const onClose = (w) => {
    setInput({
      ...input,
      waists: input.waists.filter((waist) => waist.id !== w.id),
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

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    try {
      if (
        !input.id ||
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
      Swal.fire({
        title: "Seguro quieres modificar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Modificar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const productData = {
            ...input,
            waists: input.waists.map((waist) => waist.id),
            type: input.type.id,
            genre: input.genre.id,
          };
          // console.log("estos datos se envian al back:", productData);
          await axios.put("https://nearby-gilberta-vtsports-7339cb89.koyeb.app/products", productData);
          Swal.fire({
            title: "Modificado!",
            text: "Producto modificado con éxito!",
            icon: "success",
          }).then(() => {
            setShow(false);
            forceUpdate(); // Llama a forceUpdate aquí
          });          
        }
      });
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    // console.log("useEffect cargado");
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
