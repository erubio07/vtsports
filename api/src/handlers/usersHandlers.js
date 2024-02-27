const {getAllUser, getUserById, createUser} = require("../controllers/userControllers");

const getAllUserHandler = async (req, res) => {
    try {
        const allUsers = await getAllUser();
        res.status(200).json(allUsers);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const getUserByIdHandler = async (req, res) => {
    const {id} = req.body;
    try {
        const user = await getUserById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

const createUserHandler = async(req, res) => {
    const {name, surname, mail, image, username, password} = req.body;
    try {
        const newUser = await createUser(name, surname, mail, image, username, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    };
}

module.exports = {getAllUserHandler, getUserByIdHandler, createUserHandler}