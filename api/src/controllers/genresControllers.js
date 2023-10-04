const { Genre } = require("../db");

const getAllGenres = async () => {
  try {
    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createGenre = async (name) => {
  try {
    if (!name) throw new Error("name is required");
    const newGenre = await Genre.create({
      name: name,
    });
    return newGenre;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateGenre = async (id, name) => {
  try {
    if (!id || !name) throw new Error("all fields are required");
    const genre = await Genre.findByPk(id);
    if (!genre) throw new Error("no genres matches the id");
    const updatedGenre = genre.update({
      name,
    });
    return updatedGenre;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteGenre = async (id) => {
  try {
    if (!id) throw new Error("all fields are required");
    const genre = await Genre.findByPk(id);
    if (!genre) throw new Error("no genres matches the id");
    await genre.destroy();
    return "genre deleted succesfully";
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllGenres, createGenre, updateGenre, deleteGenre };
