const { Waist } = require("../db");

const fillWaist = async () => {
  try {
    const waist1 = await Waist.create({
      name: "S",
    });
    const waist2 = await Waist.create({
      name: "M",
    });
    const waist3 = await Waist.create({
      name: "L",
    });
    const waist4 = await Waist.create({
      name: "XL",
    });
    const waist5 = await Waist.create({
      name: "XXL",
    });
    const waist6 = await Waist.create({
      name: "XXXL",
    });
    const waist7 = await Waist.create({
      name: "1",
    });
    const waist8 = await Waist.create({
      name: "2",
    });
    const waist9 = await Waist.create({
      name: "3",
    });
    const waist10 = await Waist.create({
      name: "4",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = fillWaist;
