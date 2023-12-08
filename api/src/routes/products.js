const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  deleteProductHandler,
} = require("../handlers/productsHandlers");

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);
router.delete("/:id", deleteProductHandler);

module.exports = router;
