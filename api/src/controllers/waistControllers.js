const { Waist } = require("../db");

const getAllWaist = async () => {
  try {
    const allWaist = await Waist.findAll();
    return allWaist;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createWaist = async (name) => {
  try {
    if (!name) throw new Error("all fields are required");
    const newWaist = await Waist.create({
      name: name,
    });
    return newWaist;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateWaist = async (id, name) => {
  try {
    if (!id || !name) throw new Error("all fields are required");
    const waist = await Waist.findByPk(id);
    if (!waist) throw new Error("no waist matched the id");
    const updatedWaist = await waist.update({
      name,
    });
    return updatedWaist;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteWaist = async (id) => {
  try {
    if (!id) throw new Error("all fields are required");
    const waist = await Waist.findByPk(id);
    if (!waist) throw new Error("no waist matched the id");
    const deletedWaist = await waist.destroy();
    return `Waist removed successfuly`;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllWaist, createWaist, updateWaist, deleteWaist };
