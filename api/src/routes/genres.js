const { Router } = require("express");
const {
  getAllGenresHandler,
  createGenreHandler,
} = require("../handlers/genresHandlers");

const router = Router();

router.get("/genres", getAllGenresHandler);
router.post("/genres", createGenreHandler);

module.exports = router;
