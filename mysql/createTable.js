var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    database: "fernandoportifolio"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE IF NOT EXISTS dadosDB (nome VARCHAR(255), email VARCHAR(255), telefone VARCHAR(255) , mensagem VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela Criada");
  });
});

module.exports = con;