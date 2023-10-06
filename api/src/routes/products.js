const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
} = require("../handlers/productsHandlers");

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);

module.exports = router;
