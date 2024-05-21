const {Router} = require("express");
const {getAllUserHandler, getUserByIdHandler, createUserHandler, deleteUserHandler, restoreUserHandler, updateUserHandler, updateUserToAdminHandler} = require("../handlers/usersHandlers");

const router = Router();

router.get("/", getAllUserHandler);
router.post("/", createUserHandler);
router.post("/id", getUserByIdHandler);
router.delete("/:id", deleteUserHandler);
router.put("/:id", restoreUserHandler);
router.put("/update", updateUserHandler);
router.put("/update/admin", updateUserToAdminHandler);

module.exports = router;