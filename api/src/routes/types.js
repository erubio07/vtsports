const { Router } = require("express");
const {
  getAllTypesHandlers,
  createTypeHandler,
  updatedTypeHandler,
  deleteTypeHandler,
} = require("../handlers/typesHandlers");

const router = Router();

router.get("/", getAllTypesHandlers);
router.post("/", createTypeHandler);
router.put("/:id", updatedTypeHandler);
router.delete("/:id", deleteTypeHandler);

module.exports = router;
