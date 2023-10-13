const sequelize = require("../../bin/dbConnection");
const { Model, DataTypes } = require("sequelize");

class userCourses extends Model {

}

userCourses.init({

    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    

},
    {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "userCourses"
    });

    module.exports = userCourses;