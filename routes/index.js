const { Router } = require("express");

const routes = Router();

const controleDoadores = require("../controllers/doador");
const controleDoacao = require("../controllers/doacao");

//Doadores
routes.post("/doador", controleDoadores.novodoador);
routes.get("/doador", controleDoadores.mostrarTodosOsDoadores);
routes.get("/doador/:id", controleDoadores.mostrarDoadoresID);
routes.delete("/doador/:id", controleDoadores.deletarDoador);
routes.put("/doador/:id", controleDoadores.atualizarDoador);
routes.get("/ondedoou/:id", controleDoadores.mostrarCidadesOndeDoou);

//Doação
routes.post("/doacao", controleDoacao.novaDoacao);
routes.put("/doacao/:id", controleDoacao.atualizarDoacao);
routes.get("/doacao", controleDoacao.mostrarTodasAsDoacoes);
routes.get("/doacao/:id", controleDoacao.mostrarDoacaoID);
routes.delete("/doacao/:id", controleDoacao.deletarDoacao);

module.exports = routes;
