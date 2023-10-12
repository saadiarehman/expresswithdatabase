const sequelize = require("../../bin/dbConnection");

const { Model, DataTypes } = require("sequelize");


class Teachers extends Model { }

Teachers.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        allowNull: false,
        type: DataTypes.STRING(50),
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
        modelName: "Teachers"
    });

Model.exports = Teachers;