const {
  getAllGenres,
  createGenre,
  updateGenre,
  deleteGenre,
} = require("../controllers/genresControllers");

const getAllGenresHandler = async (req, res) => {
  try {
    const allGenres = await getAllGenres();
    res.status(200).json(allGenres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createGenreHandler = async (req, res) => {
  const { name } = req.body;
  try {
    const newGenre = await createGenre(name);
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatedGenreHandler = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedGenre = await updateGenre(id, name);
    res.status(200).json(updatedGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteGenreHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGenre = await deleteGenre(id);
    res.status(200).json(deletedGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllGenresHandler,
  createGenreHandler,
  updatedGenreHandler,
  deleteGenreHandler,
};
