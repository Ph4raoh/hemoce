const doacao = require("../../models/doacao");
const { uuid } = require("uuidv4");

const controleDoacao = {
  async novaDoacao(req, res) {
    var { id_do_doador, data, cidade } = req.body;

    try {
      doacao
        .create({
          id: uuid(),
          id_do_doador: id_do_doador,
          data: data,
          cidade: cidade,
        })
        .then(() => {
          res.json("Doação cadastrada com Sucesso!");
          res.statusCode = 200;
        });
    } catch (err) {
      res.json(err);
    }
  },

  async mostrarTodasAsDoacoes(req, res) {
    try {
      doacao.findAll().then((doacao) => {
        if (doacao.length > 0) {
          res.json(doacao);
          res.statusCode = 200;
        } else {
          res.json("Nenhuma doacão cadastrada");
        }
      });
    } catch (err) {
      res.json(err);
    }
  },

  async mostrarDoacaoID(req, res) {
    var id = req.params.id;

    try {
      doacao
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doacao) => {
          if (doacao != null) {
            res.json(doacao);
            res.statusCode = 200;
          } else {
            res.json("Doação não encontrada!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },

  async deletarDoacao(req, res) {
    var id = req.params.id;

    try {
      doacao
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doacao) => {
          if (doacao != null) {
            doacao.destroy({
              where: {
                id: doacao.id,
              },
            });

            res.json("Doação deletada com sucesso!");
            res.statusCode = 200;
          } else {
            res.json("Doação não encontrada!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },
  async atualizarDoacao(req, res) {
    var id = req.params.id;

    var { id_do_doador, data, cidade } = req.body;

    try {
      doacao
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doacao) => {
          if (doacao != null) {
            doacao.update(
              {
                id_do_doador: id_do_doador,
                data: data,
                cidade: cidade,
              },
              {
                where: {
                  id: id,
                },
              }
            );
            res.json("Doação editada com sucesso!");
            res.statusCode = 200;
          } else {
            res.json("Doação não encontrada!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = controleDoacao;
