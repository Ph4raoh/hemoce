const Sequelize = require("sequelize");

const connection = new Sequelize("hemoce", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
