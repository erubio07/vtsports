import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import styles from "./CreateUser.module.css";
import {createUser, getUserById} from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const CreateUser = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)
    console.log(user);
    const [input, setInput] = useState({
        id: user.id,
        name: "",
        surname: "",
        mail: "",
        image: "",
        username: "",
        password: "",
        isAdmin: false
    });
    console.log(input);

    const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };

    const handleIsAdmin = (e) => {
      setInput({
        ...input,
        isAdmin: e.target.checked,
      })
    }

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

    const handleCreateUser = async (e) => {
      e.preventDefault();
      if(!input.name || 
        !input.surname || 
        !input.mail || 
        !input.username || 
        !input.password ){
          {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Todos los campos obligatorios deben estar completos!",
            });
            return;
          }
      };
      try {
        
        await dispatch(createUser(input));
        setInput({
          name: "",
          surname: "",
          mail: "",
          image: "",
          username: "",
          password: "",
          isAdmin: false,
        });
        Swal.fire({
          icon: "success",
          title: "OK",
          text: "Usuario creado con éxito",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.response.data.error || "Algo salió mal. Por favor, inténtalo de nuevo.",
        });
      }
    };

    return(
        <div>
            <div className={styles.container}>
      <h3> Crear Nuevo Usuario </h3>
      <form
        className={styles.form}
        onSubmit={ (e) => {handleCreateUser(e)}}
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
        <label className={styles.label}>Usuario: </label>
        <input
          className={styles.input}
          type="text"
          name="username"
          value={input.username}
          placeholder="Usuario"
          onChange={handleChange}
        />
        <label className={styles.label}>Contraseña: </label>
        <input
          className={styles.input}
          type="password"
          name="password"
          value={input.password}
          placeholder="Contraseña"
          onChange={handleChange}
        />
        <label className={styles.label}>Admin: </label>
          <input
            className={styles.input}
            type="checkbox"
            name="isAdmin"
            checked={input.isAdmin}
            onChange={handleIsAdmin}
          />
        <Button type="submit" variant="primary" className={styles.button}>
          Crear Usuario
        </Button>
      </form>
        </div>
    </div>
    )
}

export default CreateUser;