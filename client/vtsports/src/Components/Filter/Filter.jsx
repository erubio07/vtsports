import React from "react";
import styles from "./Filter.module.css";

function Filter() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="search" />
        <button className={styles.button}>Buscar</button>
      </div>
      <div className={styles.sortContainer}>
        Género
        <select className={styles.select}>
          <option className={styles.option} value={"All"}>
            All{" "}
          </option>
          <option className={styles.option} value={"Masculino"}>
            Masculino
          </option>
          <option className={styles.option} value={"Femenino"}>
            Femenino
          </option>
          <option className={styles.option} value={"Niña"}>
            Niña
          </option>
          <option className={styles.option} value={"Niño"}>
            Niño
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Nombre
        <select className={styles.select}>
          <option className={styles.option} value={"-"}>
            -
          </option>
          <option className={styles.option} value={"A-Z"}>
            A-Z
          </option>
          <option className={styles.option} value={"Z-A"}>
            Z-A
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Precio
        <select className={styles.select}>
          <option className={styles.option} value={"-"}>
            -
          </option>
          <option className={styles.option} value={"ASC"}>
            ASC
          </option>
          <option className={styles.option} value={"DESC"}>
            DESC
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Talles
        <select className={styles.select}>
          <option className={styles.option} value={"-"}>
            -
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
