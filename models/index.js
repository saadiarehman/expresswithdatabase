const sequelize = require("../bin/dbConnection");

const Users = require("../models/definitions/users");
const Roles = require("../models/definitions/roles");
const Students = require("../models/definitions/students");
const Teachers = require("../models/definitions/teachers");
const Departments = require("../models/definitions/departments");
const models = { Users, Roles, Students, Teachers, Departments };

const db = {

};

db.sequelize = sequelize;

module.exports = { models, db };