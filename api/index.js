const server = require("./src/app");
const fillGenre = require("./src/controllers/fillGenres");
const fillType = require("./src/controllers/fillType");

const { conn } = require("./src/db.js");
const port = 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
    fillGenre();
    fillType();
  });
});
