const {login} = require("../controllers/loginController.js");

const loginHandler = async (req, res) => {
    const {username, password} = req.body;
    try {
        const userLogin = await login(username, password);
        res.status(200).json(userLogin);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {loginHandler};