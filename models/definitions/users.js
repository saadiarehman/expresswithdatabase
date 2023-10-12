const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");


class Users extends Model {

}

Users.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(50),

    },
    email: {
        unique: true,
        type: DataTypes.STRING(50),
        allowNull: false

    },
    password: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING(50)
    },
},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Users"
    });
module.exports = Users;
