const {
  getAllProducts,
  getProductById,
  createProduct,
} = require("../controllers/productsControllers");

const getAllProductsHandler = async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const productById = await getProductById(id);
    res.status(200).json(productById);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProductHandler = async (req, res) => {
  const { name, description, image, price, type, genre, waist } = req.body;
  try {
    const newProduct = await createProduct(
      name,
      description,
      image,
      price,
      type,
      genre,
      waist
    );
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
};
