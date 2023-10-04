const { Type } = require("../db");

const getAllTypes = async () => {
  try {
    const allTypes = await Type.findAll();
    return allTypes;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createType = async (name) => {
  try {
    if (!name) throw new Error("name is required");
    const newType = await Types.create({
      name: name,
    });
    return newType;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateType = async (id, name) => {
  try {
    if (!id || !name) throw new Error("all fields are required");
    const typeSearched = await Type.findOne({
      where: {
        id: id,
      },
    });
    if (typeSearched) {
      const updatedType = await typeSearched.update({
        name,
      });
      return updatedType;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllTypes, createType, updateType };
