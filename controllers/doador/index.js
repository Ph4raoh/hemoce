const doador = require("../../models/doador");
const doacao = require("../../models/doacao");

const { uuid } = require("uuidv4");

const controleDoadores = {
  async novodoador(req, res) {
    var { nome, idade, sexo, tipo_sanguineo, ja_doou } = req.body;

    try {
      doador
        .create({
          id: uuid(),
          nome: nome,
          idade: idade,
          sexo: sexo,
          tipo_sanguineo: tipo_sanguineo,
          ja_doou: ja_doou,
        })
        .then(() => {
          res.json("Doador cadastrado com Sucesso!");
          res.statusCode = 200;
        });
    } catch (err) {
      res.json(err);
    }
  },

  async mostrarTodosOsDoadores(req, res) {
    try {
      doador.findAll().then((doador) => {
        if (doador.length > 0) {
          res.json(doador);
          res.statusCode = 200;
        } else {
          res.json("Nenhum Doador cadastrado");
        }
      });
    } catch (err) {
      res.json(err);
    }
  },

  async mostrarCidadesOndeDoou(req, res) {
    var id_do_doador = req.params.id;

    console.log(id);

    try {
      doador
        .findAll({
          where: {
            id: id_do_doador,
          },
          include: [
            {
              model: doacao,
            },
          ],
        })
        .then((doador) => {
          res.json(doador);
        });
    } catch (err) {
      res.json(err);
    }
  },

  async mostrarDoadoresID(req, res) {
    var id = req.params.id;

    try {
      doador
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doador) => {
          if (doador != null) {
            res.json(doador);
            res.statusCode = 200;
          } else {
            res.json("Doador não encontrado!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },

  async deletarDoador(req, res) {
    var id = req.params.id;

    try {
      doador
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doador) => {
          if (doador != null) {
            doador.destroy({
              where: {
                id: doador.id,
              },
            });

            res.json("Doador deletado com sucesso!");
            res.statusCode = 200;
          } else {
            res.json("Doador não encontrado!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },
  async atualizarDoador(req, res) {
    var id = req.params.id;

    var { nome, idade, sexo, tipo_sanguineo, ja_doou } = req.body;

    try {
      doador
        .findOne({
          where: {
            id: id,
          },
        })
        .then((doador) => {
          if (doador != null) {
            doador.update(
              {
                nome: nome,
                idade: idade,
                sexo: sexo,
                tipo_sanguineo: tipo_sanguineo,
                ja_doou: ja_doou,
              },
              {
                where: {
                  id: id,
                },
              }
            );
            res.json("Doador editado com sucesso!");
            res.statusCode = 200;
          } else {
            res.json("Doador não encontrado!");
          }
        });
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = controleDoadores;
