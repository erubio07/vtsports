const {getAllUser, getUserById, createUser, deleteUser, restoreUser, updateUser, updateUserToAdmin} = require("../controllers/userControllers");

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
    const {id, name, surname, mail, image, username, password, isAdmin} = req.body;
    try {
        const newUser = await createUser(id, name, surname, mail, image, username, password, isAdmin);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({error:error.message});
    };
};

const deleteUserHandler = async (req, res) => {
    const {id} = req.body;
    try {
        await deleteUser(id);
        res.status(200).send("Usuario eliminado correctamente");
    } catch (error) {
        res.status(400).json({error:error.message});
    };
};

const restoreUserHandler = async (req, res) => {
    const {id} = req.body;
    try {
        await restoreUser(id);
        res.status(200).send("usuario restaurado exitosamente");
    } catch (error) {
        res.status(400).json({error:error.message});
    };
};

const updateUserHandler = async (req, res) => {
    const {id, name, surname, mail, image} = req.body;
    try {
        const userUpdated = await updateUser(id, name, surname, mail, image);
        res.status(200).json(userUpdated);
    } catch (error) {
        res.status(400).json({error:error.message});
    };
};

const updateUserToAdminHandler = async (req, res) => {
    const {id} = req.body;
    try {
        await updateUserToAdmin(id);
        res.status(200).send("usuario ahora es admin");
    } catch (error) {
        res.status(400).json({erro:error.message});
    };
}
module.exports = {getAllUserHandler, getUserByIdHandler, createUserHandler, deleteUserHandler, restoreUserHandler, updateUserHandler, updateUserToAdminHandler}