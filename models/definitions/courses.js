const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class Courses extends Model {

}

Courses.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    courseName: {

        type: DataTypes.STRING(50)
    },
    creditHour: {

        type: DataTypes.INTEGER
    },
    instructorName:{
        type: DataTypes.STRING(50)
    },

},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Courses"
    });

module.exports = Courses;






