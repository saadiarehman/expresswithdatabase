const sequelize = require("../bin/dbConnection");

const Users = require("../models/definitions/users");
const Roles = require("../models/definitions/roles");
const Students = require("../models/definitions/students");
const Teachers = require("../models/definitions/teachers");
const Departments = require("../models/definitions/departments");
const Courses = require("../models/definitions/courses");
const userCourses=require("../models/definitions/userCourses");



const models = { Users, Roles, Students, Teachers, Departments, Courses,userCourses };
//relations starts

//user-Course One to one

//Courses.hasOne(Users,{foreignKey:"courseId"})
//Users.belongsTo(Courses,{foreignKey:"courseId"})

//user-Role one to many
Roles.hasMany(Users,{foreignKey:"roleId"})
Users.belongsTo(Roles,{foreignKey:"roleId"})

//many to many user-courses(not recommended)
//Users.belongsToMany(userCourses,{through:"courseId"});
//Courses.belongsToMany(userCourses,{through:"courseId"});
//many-many by creating table manually

Users.hasMany(userCourses,{foreignKey:"userCourseId"});
userCourses.belongsTo(Users,{foreignKey:"userCourseId"});


Courses.hasMany(userCourses,{foreignKey:"userCourseId"});
userCourses.belongsTo(Courses,{foreignKey:"userCourseId"});
// relations end
const db = {

};

db.sequelize = sequelize;
sequelize.models=models;

module.exports = { models, db };