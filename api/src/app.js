const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/index");
const local = "http://localhost:3000"
const code = "https://turbo-yodel-wqwv465j54gc5xj4-3000.app.github.dev"

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", ´${code}´); //Autorizo recibir solicitudes de este dominio
  res.header("Access-Control-Allow-Credentials", true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); //Autorizo recibir solicitudes con dichos hedears
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE"); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.use("/", router);

module.exports = server;
