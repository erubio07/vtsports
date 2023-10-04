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

module.exports = { getAllGenres, createGenre };
