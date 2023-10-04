const { Router } = require("express");
const genres = require("./genres");
const types = require("./types");

const router = Router();

router.use("/", genres);
router.use("/", types);

module.exports = router;
