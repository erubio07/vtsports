const {User} = require("../db");

const getAllUser = async () => {
    try {
        const allUsers = await User.findAll();
        return allUsers;
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = {getAllUser}