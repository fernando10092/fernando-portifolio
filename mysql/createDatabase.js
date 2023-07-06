var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("CREATE DATABASE IF NOT EXISTS fernandoPortifolio", function (err, result) {
    if (err) throw err;
    console.log("Banco de Dados Criado");
  });
});

module.exports = con;