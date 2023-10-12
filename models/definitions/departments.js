const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Departments extends Model {

}

Departments.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    deptName: {

        type: DataTypes.STRING(50)
    },
    address: {

        type: DataTypes.STRING(50)
    },

},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Departments"
    });

    module.exports = Departments;