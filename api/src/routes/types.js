const { Router } = require("express");
const {
  getAllTypesHandlers,
  createTypeHandler,
  updatedTypeHandler,
} = require("../handlers/typesHandlers");

const router = Router();

router.get("/", getAllTypesHandlers);
router.post("/", createTypeHandler);
router.put("/:id", updatedTypeHandler);

module.exports = router;
