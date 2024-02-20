const {getAllUser} = require("../controllers/userControlles");

const getAllUserHandler = async (req, res) => {
    try {
        const allUsers = await getAllUser();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = {getAllUserHandler}