const { Router } = require("express");
const genres = require("./genres");
const types = require("./types");
const waists = require("./waists");

const router = Router();

router.use("/genres", genres);
router.use("/types", types);
router.use("/waist", waists);

module.exports = router;
