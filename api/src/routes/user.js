const {Router} = require("express");
const {getAllUserHandler} = require("../handlers/usersHandlers");

const router = Router();

router.get("/", getAllUserHandler);

module.exports = router;