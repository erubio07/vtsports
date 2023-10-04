const {
  getAllGenres,
  createGenre,
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

module.exports = { getAllGenresHandler, createGenreHandler };
