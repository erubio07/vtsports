const { Router } = require("express");
const {
  getAllGenresHandler,
  createGenreHandler,
  updatedGenreHandler,
  deleteGenreHandler,
} = require("../handlers/genresHandlers");

const router = Router();

router.get("/genres", getAllGenresHandler);
router.post("/genres", createGenreHandler);
router.put("/genres/:id", updatedGenreHandler);
router.delete("/:id", deleteGenreHandler);

module.exports = router;
