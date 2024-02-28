const {Router} = require("express");
const {loginHandler} = require ("../handlers/loginHandlers.js");

const router = Router();

router.post("/", loginHandler);

module.exports = router;