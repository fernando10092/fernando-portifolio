const express = require("express");

const rotas = require("./routes/rotas")

const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs")

app.use("/", rotas);

app.listen(3333, ()=> console.log("Server Rodando na Porta 8000"));

