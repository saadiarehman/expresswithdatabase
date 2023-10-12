const { Sequelize } = require("sequelize");
const config = require("../config.json");

const database = new Sequelize(config.db);

database.authenticate().then(() => {
    console.log("Database Connected");
}).catch((error) => {
    console.log(error);
});

module.exports = database;