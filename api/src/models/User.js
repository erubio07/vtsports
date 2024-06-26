const {DataTypes, Sequelize} = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    const User = sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            surname: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mail: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            image: {
                type:DataTypes.STRING,
                allowNull: true,
            },
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isAdmin: {
                type:DataTypes.BOOLEAN,
                allowNull: true,
            }
        },
        {
            paranoid: true,
        },
    );
    User.beforeCreate(async (user, options) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
    });
    User.beforeUpdate(async (user, options) => {
        if(user.changed("password")) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
        };
    });
    return User;
};