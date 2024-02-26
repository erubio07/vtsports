const { Sequelize } = require("sequelize");
const {User} = require("../db");

const getAllUser = async () => {
    try {
        const allUsers = await User.findAll();
        return allUsers;
    } catch (error) {
        throw new Error(error.message);
    };
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id);
        console.log(user);
        return {
            user.id,
            user.name,
            user.surname,
            user.mail,
            user.username,
            user.image
        }
    } catch (error) {
        throw new Eror(error.message);
    }
}

module.exports = {getAllUser}