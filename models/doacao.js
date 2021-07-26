const Sequelize = require("sequelize");

const connection = require("./Connection");

const doador = require("./doador");

const doacao = connection.define("doacoes", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  id_do_doador: {
    type: Sequelize.STRING,
  },
  data: {
    type: Sequelize.STRING,
  },
  cidade: {
    type: Sequelize.STRING,
  },
});

doacao.associate = function (models) {
  doacao.hasMany(models.doador, {
    foreignKey: "id",
    sourceKey: "id_do_doador",
  });
};

doacao.sync({ force: false }).then(() => {});

module.exports = doacao;
