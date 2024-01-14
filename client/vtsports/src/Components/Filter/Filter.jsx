import React from "react";
import styles from "./Filter.module.css";
import { getAllWaist } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Filter({
  handleFIlterByGenre,
  handleFilterByWaist,
  handleSortByPrice,
}) {
  const dispatch = useDispatch();
  const waist = useSelector((state) => state.waist);
  // console.log(waist);

  useEffect(() => {
    dispatch(getAllWaist());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="search" />
        <button className={styles.button}>Buscar</button>
      </div>
      <div className={styles.sortContainer}>
        Género
        <select
          className={styles.select}
          onChange={(e) => handleFIlterByGenre(e)}
        >
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
        Precio
        <select
          className={styles.select}
          onChange={(e) => handleSortByPrice(e)}
        >
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
        <select
          className={styles.select}
          onChange={(e) => handleFilterByWaist(e)}
        >
          <option className={styles.option} value={"-"}>
            -
          </option>
          {waist &&
            waist.map((w) => (
              <option value={w.name} key={w.id}>
                {w.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
