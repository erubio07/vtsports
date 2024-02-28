const {Router} = require("express");
const {getAllUserHandler, getUserByIdHandler, createUserHandler, deleteUserHandler, restoreUserHandler} = require("../handlers/usersHandlers");

const router = Router();

router.get("/", getAllUserHandler);
router.post("/", createUserHandler);
router.post("/id", getUserByIdHandler);
router.delete("/id", deleteUserHandler);
router.put("/id", restoreUserHandler);

module.exports = router;