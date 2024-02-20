const {User} = require("../db");

const fillUser = async () => {
    try {
        const user1 = await User.create({
            name: "Ezequiel",
            surname: "Rubio",
            mail: "erubio07@gmail.com",
            username: "erubio07",
            password: "2423122621"
        });
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = fillUser;