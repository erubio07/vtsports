const { Product, Genre, Type, Waist } = require("../db");

const getAllProducts = async () => {
  try {
    const allProducts = await Product.findAll();
    return allProducts;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getProductById = async (id) => {
  try {
    if (!id) throw new Error("id is required");
    const productById = await Product.findByPk(id);
    if (!productById) throw new Error("no products matches the id");
    return productById;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createProduct = async (
  name,
  description,
  image,
  price,
  type,
  genre,
  waist
) => {
  try {
    if (!name || !description || !image || !price || !type || !genre || !waist)
      throw new Error("all fields are required");
    const newProduct = await Product.create({
      name,
      description,
      image,
      price,
    });
    await newProduct.addGenre(genre);
    await newProduct.addType(type);
    await newProduct.addWaist(waist);
    return newProduct;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { getAllProducts, getProductById, createProduct };
