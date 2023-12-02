const Sequelize = require("sequelize");

const sequelize = new Sequelize("finalexam", "root", "", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;