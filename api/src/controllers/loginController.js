const {User} = require("../db");
const {Sequelize} = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAccessToken = (user) => {
    return jwt.sign({id: user.id}, process.env.ACCESS_TOKEN, {
        expiresIn: 1800000,
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({id: user.id}, process.env.REFRESH_TOKEN);
};

const login = async (username, password) => {
    try {
        const user = await User.findOne({
            where: {
                username: username,
            }
        });
        if(!user) throw new Error('usuario no registrado');
        if(user){
            const passwordCompare = await bcrypt.compare(password, user.password);
            if(passwordCompare){
                const accessToken = generateAccessToken(user);
                const refreshToken = generateRefreshToken(user);
                return {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        mail: user.mail,
                        image: user.image,
                        username: user.username,
                        isAdmin: user.isAdmin,
                    }
                };
            };
        };
    } catch (error) {
        throw new Error(error.message);
    };
};

module.exports = {login};