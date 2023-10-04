const { Router } = require("express");
const genres = require("./genres");
const types = require("./types");

const router = Router();

router.use("/genres", genres);
router.use("/types", types);

module.exports = router;
