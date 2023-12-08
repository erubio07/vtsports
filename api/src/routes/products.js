const { Router } = require("express");
const {
  getAllProductsHandler,
  getProductByIdHandler,
  createProductHandler,
  deleteProductHandler,
  restoreProductHandler,
  getAllProductsAdminHandler,
} = require("../handlers/productsHandlers");

const router = Router();

router.get("/", getAllProductsHandler);
router.get("/admin", getAllProductsAdminHandler);
router.get("/:id", getProductByIdHandler);
router.post("/", createProductHandler);
router.delete("/:id", deleteProductHandler);
router.put("/:id", restoreProductHandler);

module.exports = router;
