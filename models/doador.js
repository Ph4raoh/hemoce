const Sequelize = require("sequelize");

const connection = require("./Connection");

const doacao = require("./doacao");

const doador = connection.define("doadores", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING,
  },
  idade: {
    type: Sequelize.INTEGER,
  },
  sexo: {
    type: Sequelize.STRING,
  },
  tipo_sanguineo: {
    type: Sequelize.STRING,
  },
  ja_doou: {
    type: Sequelize.BOOLEAN,
  },
});

doacao.associate = function (models) {
  doacao.belongsTo(models.doacao, { foreignKey: "id" });
};

doador.sync({ force: false }).then(() => {});

module.exports = doador;
