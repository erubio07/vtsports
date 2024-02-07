const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  deleteProductHandler,
  restoreProductHandler,
  getAllProductsAdminHandler,
  getProductsRandomHandler,
  updateProductHandler,
} = require("../handlers/productsHandlers");

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/rand", getProductsRandomHandler);
router.get("/admin", getAllProductsAdminHandler);
router.put("/:id", updateProductHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);
router.delete("/:id", deleteProductHandler);
router.put("/:id", restoreProductHandler);

module.exports = router;
