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
            id: user.id,
            name: user.name,
            surname: user.surname,
            mail: user.mail,
            image: user.image,
            username: user.username,
        };
    } catch (error) {
        throw new Eror(error.message);
    };
};

const createUser = async (name, surname, mail, image,username,password) => {
    try {
        const userExists = await User.findOne({
            where: {
                username: username
            }
        });
        if(userExists){
            throw new Error("user already exists");
        } else {
            const newUser = await User.create({
                name,
                surname,
                mail,
                image,
                username,
                password
            });
            return newUser;
        }
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = {getAllUser, getUserById, createUser}