const {Router} = require("express");
const {getAllUserHandler, getUserByIdHandler, createUserHandler} = require("../handlers/usersHandlers");

const router = Router();

router.get("/", getAllUserHandler);
router.post("/", createUserHandler);
router.get("/id", getUserByIdHandler);

module.exports = router;