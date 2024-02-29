const { Sequelize } = require("sequelize");
const {User} = require("../db");

const getAllUser = async () => {
    try {
        const allUsers = await User.findAll({
            paranoid: false,
        });
        return allUsers;
    } catch (error) {
        throw new Error(error.message);
    };
};

const getUserById = async (id) => {
    try {
        const user = await User.findByPk(id, {
            paranoid: false,
        });
        return {
            id: user.id,
            name: user.name,
            surname: user.surname,
            mail: user.mail,
            image: user.image,
            username: user.username,
            isAdmin: user.isAdmin,
            deletedAt: user.deletedAt,
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

const createUser = async (id, name, surname, mail, image,username,password) => {
    try {
        const userAdmin = await User.findByPk(id);
        if(userAdmin.isAdmin){
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
                    password,
                    isAdmin
                });
                return newUser;
            }
        }else{
            throw new Error("usuario no autorizado");
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

const deleteUser = async (id) => {
    if(!id)throw new Error("debe especificar un id válido");
    try {
        await User.destroy({
            where: {
                id: id,
            }
        })
    } catch (error) {
        throw new Error(error.message);
    };
};

const restoreUser = async (id) => {
    if(!id) throw new Error("debe especificar un id válido");
    try {
        await User.restore({
            where: {
                id: id,
            },
        });
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = {getAllUser, getUserById, createUser, deleteUser, restoreUser}