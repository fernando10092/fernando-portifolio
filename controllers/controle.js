//Importando Inserindo Dados no DB
const funcao = require("../mysql/insert.js");
const retornoMysql = require("../mysql/retorno.js");

//Importando HTTP
//const httpApi = require("../Api/outro.js");

//Importando Axios
const getAxios = require("../Api/getAxios");
const envioCep = require("../Api/postAxios.js");

//Defininado funções e chamando paginas
const app = {

    //Pagina Home
    inicio: (req, res) => {
        res.render("index")
    },

    api: (req, res) => {

        var infoCep = "00000-000";

        var local = infoCep;

        res.render("api", { local });
    },

    //Api
    apiEnvio: async (req, res) => {

        //Declaração de variavel
        var infoCep = "00000-000";

        //Obtendo requisição
        const { inputCep } = req.body;

        //Transferindo para uma variavel
        infoCep = inputCep;

        //Envio de API
        var local = await envioCep(infoCep);


        //Console.Log
        console.log("#### " + local.localidade);

        //Retorando a pagina e passagndo as variaveis
        return res.render("api", { local });


    },

    //Pagina Contato
    contato: (req, res) => {
        //Importando Conexao
        const conexaoDB = require("../mysql/conexao");

        //Importando Criação do Banco de Dados
        const criarDB = require("../mysql/createDatabase");

        //Importando Criação da tabela
        const criarTableDB = require("../mysql/createTable");

        //Importando Inserindo Dados no DB
        //const inserirDB = require("../mysql/insert");

    },


    //ENVIO DE DADOS MYSQL
    cadastrar: async (req, res) => {


        //Obtendo dados do Input da Pagina
        var { nome, email, telefone, msg } = req.body;

        //Inserindo no Banco de dados - Funcão
        funcao(nome, email, telefone, msg);

        //Recarregando a pagina
        res.render("");


    },

    sms: (req, res) => {
        const sms = require("../Twilio/sms");
    },

    email: (req, res) => {
        const email = require("../Twilio/sms");

    },

    mercadopago: (req, res) => {
        res.render("mercadoPago");

    },

    mercadopagoPost: (req, res) => {



        res.render("mercadoPago");

    },

    teste: async (req, res) => {

        retornoMysql().then((e)=>{

            console.log("DENTRO DO CONTROLE: "+e);

            res.send(e);

        

        });

    


        //res.render("mysqlRetorno", {init: retornoMysql()});
      


    }



}

//Exportando metodo App
module.exports = app;
