const { Router } = require("express");
const genres = require("./genres");

const router = Router();

router.use("/", genres);

module.exports = router;
