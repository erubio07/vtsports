const { Genre } = require("../db");

const fillGenres = async () => {
  try {
    const genre1 = await Genre.create({
      name: "Masculino",
    });
    const genre2 = await Genre.create({
      name: "Femenino",
    });
    const genre3 = await Genre.create({
      name: "Niño",
    });
    const genre4 = await Genre.create({
      name: "Niña",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillGenres;
