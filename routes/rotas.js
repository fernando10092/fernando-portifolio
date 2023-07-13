//Importando Express
const express = require("express");

//Importando o arquivo controle
const controle = require("../controllers/controle")

//Adicionando o express na variável Router
const router = express.Router();

//Chamando Paginas
router.get("/", controle.inicio);

router.get("/api", controle.api);

//METODO POST API
router.post("/api", controle.apiEnvio);

//METODO POST PARA O ENVIO DE DADOS MYSQL
router.post("", controle.cadastrar);

//ENVIO DE SMS
router.get("/sms", controle.sms);

//TESTE
router.get("/teste", controle.teste);


//Exportando metodo Router
module.exports = router;
