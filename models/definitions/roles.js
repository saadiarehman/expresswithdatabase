const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Roles extends Model {

}

Roles.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    roleName: {

        type: DataTypes.STRING(50)
    },

},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Roles"
    });

    module.exports = Roles;