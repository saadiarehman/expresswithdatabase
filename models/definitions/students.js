const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Students extends Model { }

Students.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(50),
    },
    rollNumber: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING(50)
    },
    class: {
        type: DataTypes.STRING(50)
    },
    address: {

        type: DataTypes.STRING(50),

    },
    contactNumber: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Students"
    });

    module.exports = Students;