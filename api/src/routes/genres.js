const { Router } = require("express");
const {
  getAllGenresHandler,
  createGenreHandler,
  updatedGenreHandler,
  deleteGenreHandler,
} = require("../handlers/genresHandlers");

const router = Router();

router.get("/", getAllGenresHandler);
router.post("/", createGenreHandler);
router.put("/:id", updatedGenreHandler);
router.delete("/:id", deleteGenreHandler);

module.exports = router;
