import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../Redux/actions";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import styles from "./EditUser.module.css";
import axios from "axios";

const EditUser = () => {
  const user = useSelector((state) => state.user);
  // console.log(user);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: user.name,
    surname: user.surname,
    mail: user.mail,
    image: user.image,
  });
  // console.log(input);
  const id = user.id;

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const preset_key = "ml_default";
  const cloud_name = "dytke2vlw";

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

  const handleEditUser = async (e) => {
    e.preventDefault();
    if (!input.name || !input.surname || !input.mail) {
      {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Todos los campos obligatorios deben estar completos!",
        });
        return;
      }
    }
    try {
      await dispatch(editUser(input, id));
      setInput({
        name: user.name,
        surname: user.surname,
        mail: user.mail,
        image: user.image,
      });
      Swal.fire({
        icon: "success",
        title: "OK",
        text: "Usuario modificado con éxito",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error.response.data.error ||
          "Algo salió mal. Por favor, inténtalo de nuevo.",
      });
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h3> Editar Usuario </h3>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleEditUser(e);
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
          <label className={styles.label}>Apellido: </label>
          <input
            className={styles.input}
            type="text"
            name="surname"
            value={input.surname}
            placeholder="Apellido"
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
          <label className={styles.label}>Mail: </label>
          <input
            className={styles.input}
            type="text"
            name="mail"
            value={input.mail}
            placeholder="Mail"
            onChange={handleChange}
          />
          <Button type="submit" variant="primary" className={styles.button}>
            Modificar Usuario
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
