const { Router } = require("express");
const genres = require("./genres");
const types = require("./types");
const waists = require("./waists");
const products = require("./products");
const users = require("./user");
const login = require("./login");

const router = Router();

router.use("/genres", genres);
router.use("/types", types);
router.use("/waist", waists);
router.use("/products", products);
router.use("/user", users);
router.use("/login", login);

module.exports = router;
