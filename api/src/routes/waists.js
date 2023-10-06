const { Router } = require("express");
const {
  getAllWaistHandler,
  createWaistHandler,
  updateWaistHandler,
  deleteWaistHandler,
} = require("../handlers/waistHandlers");

const router = Router();

router.get("/", getAllWaistHandler);
router.post("/", createWaistHandler);
router.put("/:id", updateWaistHandler);
router.delete("/:id", deleteWaistHandler);

module.exports = router;
