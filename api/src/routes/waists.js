const { Router } = require("express");
const {
  getAllWaistHandler,
  createWaistHandler,
  updateWaistHandler,
  deleteWaistHandler,
  getWaistByIdHandler,
} = require("../handlers/waistHandlers");

const router = Router();

router.get("/", getAllWaistHandler);
router.get("/:id", getWaistByIdHandler);
router.post("/", createWaistHandler);
router.put("/:id", updateWaistHandler);
router.delete("/:id", deleteWaistHandler);

module.exports = router;
