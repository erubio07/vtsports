const { Router } = require("express");
const {
  getAllWaistHandler,
  createWaistHandler,
  updateWaistHandler,
} = require("../handlers/waistHandlers");

const router = Router();

router.get("/", getAllWaistHandler);
router.post("/", createWaistHandler);
router.put("/:id", updateWaistHandler);

module.exports = router;
