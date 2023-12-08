const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  restoreProduct,
  getAllProductsAddmin,
} = require("../controllers/productsControllers");

const getAllProductsHandler = async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllProductsAdminHandler = async (req, res) => {
  try {
    const allProductsAdmin = await getAllProductsAddmin();
    res.status(200).json(allProductsAdmin);
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
  const { name, description, image, price, type, genre, waists } = req.body;
  try {
    const newProduct = await createProduct(
      name,
      description,
      image,
      price,
      type,
      genre,
      waists
    );
    res.status(201).send("created succesfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    res.status(200).send("product deleted succesfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const restoreProductHandler = async (req, res) => {
  const { id } = req.params;
  try {
    await restoreProduct(id);
    res.status(200).send("product restore succesfully");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  deleteProductHandler,
  restoreProductHandler,
  getAllProductsAdminHandler,
};
