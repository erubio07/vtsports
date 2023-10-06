const { Router } = require("express");
const {
  getAllGenresHandler,
  createGenreHandler,
  updatedGenreHandler,
  deleteGenreHandler,
  getGenresByIdHandler,
} = require("../handlers/genresHandlers");

const router = Router();

router.get("/", getAllGenresHandler);
router.get("/:id", getGenresByIdHandler);
router.post("/", createGenreHandler);
router.put("/:id", updatedGenreHandler);
router.delete("/:id", deleteGenreHandler);

module.exports = router;
