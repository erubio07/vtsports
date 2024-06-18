const server = require("./src/app");
const fillGenre = require("./src/controllers/fillGenres");
const fillType = require("./src/controllers/fillType");
const fillWaist = require("./src/controllers/fillWaist");
const fillProduct = require("./src/controllers/fillProducts.js");
const fillUser = require("./src/controllers/FillUser.js");

const { conn } = require("./src/db.js");
const port = process.env.PORT ?? 3001;

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
    fillGenre();
    fillType();
    fillWaist();
    fillProduct();
    fillUser();
  });
});
