const { Type } = require("../db");

const fillType = async () => {
  try {
    const type1 = await Type.create({
      name: "Algodon",
    });
    const type2 = await Type.create({
      name: "Jersey",
    });
    const type3 = await Type.create({
      name: "Spoon",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillType;
