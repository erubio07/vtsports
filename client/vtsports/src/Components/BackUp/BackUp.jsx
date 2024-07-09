import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const BackUp = () => {
  const [backUpOptions, setBackUpOptions] = useState({
    products: false,
    types: false,
    waists: false,
    genres: false,
    users: false,
  });
  console.log(backUpOptions);

  const backUpData = async () => {
    try {
      const response = await axios.post(
        "localhost:3001/backup",
        backUpOptions,
        {
          responseType: "blob",
        }
      );

      const blob = new Blob([response.data], { type: "application/json" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "BackUp.json";
      link.click();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div>
      <Form>
        <h1>Seleccionar los datos a resguardar</h1>
        <Form.Check // prettier-ignore
          type="switch"
          id="products"
          label="Productos"
          onChange={() => {
            setBackUpOptions((prevOptions) => ({
              ...prevOptions,
              products: !prevOptions.products,
            }));
          }}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="genres"
          label="Generos"
          onChange={() => {
            setBackUpOptions((prevOptions) => ({
              ...prevOptions,
              genres: !prevOptions.genres,
            }));
          }}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="types"
          label="Material"
          onChange={() => {
            setBackUpOptions((prevOptions) => ({
              ...prevOptions,
              types: !prevOptions.types,
            }));
          }}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="waists"
          label="Talles"
          onChange={() => {
            setBackUpOptions((prevOptions) => ({
              ...prevOptions,
              waists: !prevOptions.waists,
            }));
          }}
        />
        <Form.Check // prettier-ignore
          type="switch"
          id="users"
          label="Usuarios"
          onChange={() => {
            setBackUpOptions((prevOptions) => ({
              ...prevOptions,
              users: !prevOptions.users,
            }));
          }}
        />
        <Button>Descargar</Button>
      </Form>
    </div>
  );
};

export default BackUp;
