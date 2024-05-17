import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import styles from "./CreateUser.module.css";
import axios from "axios";

const CreateUser = () => {
    const [input, setInput] = useState({
        name: "",
        surname: "",
        mail: "",
        image: "",
        username: "",
        password: "",
        isAdmin: false
    })

    const handleChange = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value,
        });
      };

    return(
        <div>
            <div className={styles.container}>
      <h3> Crear Nuevo Usuario </h3>
      <form
        className={styles.form}
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
          name="description"
          value={input.surname}
          placeholder="Apellido"
          onChange={handleChange}
        />
        <label className={styles.label}>Imagen: </label>
        <input
          className={styles.input}
          type="file"
          name="image"
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
          name="price"
          value={input.mail}
          placeholder="Mail"
          onChange={handleChange}
        />
        <label className={styles.label}>Usuario: </label>
        <input
          className={styles.input}
          type="text"
          name="price"
          value={input.username}
          placeholder="Usuario"
          onChange={handleChange}
        />
        <label className={styles.label}>Contraseña: </label>
        <input
          className={styles.input}
          type="text"
          name="price"
          value={input.password}
          placeholder="Contraseña"
          onChange={handleChange}
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