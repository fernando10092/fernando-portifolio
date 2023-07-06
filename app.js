//Importando Express
const express = require("express");

//Importando Rotas
const rotas = require("./routes/rotas")

//Defininado express na variável app
const app = express();

//Para Usar o banco de Dados (Envio JSON)
app.use(express.json());

//Configuração para enviar POST
app.use(express.urlencoded(({extended: false})));


 

//Para usar a pasta public
app.use(express.static('public'));

//Variável da Porta
var porta = 3333;

//Para conseguir usar as paginas em ejs
app.set("view engine", "ejs")

//Chamando rotas
app.use("/", rotas);

//Servidor rodando
app.listen(porta, ()=> console.log("Servidor rodando na porta: "+porta));

