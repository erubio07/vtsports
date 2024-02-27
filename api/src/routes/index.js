const { Router } = require("express");
const genres = require("./genres");
const types = require("./types");
const waists = require("./waists");
const products = require("./products");
const users = require("./user");

const router = Router();

router.use("/genres", genres);
router.use("/types", types);
router.use("/waist", waists);
router.use("/products", products);
router.use("/user", users);

module.exports = router;
