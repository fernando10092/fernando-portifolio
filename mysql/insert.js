var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "fernandoportifolio"
});

/* 
  con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO dadosDB (nome, email) VALUES ('fUNCIONA', 'kAKA')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Dados Inseridos com Sucesso");
  });
}); 

*/


function funcao(nome, email, telefone, msg) {

  return con.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO dadosDB (nome, email, telefone, mensagem) VALUES ('" + nome + "', '" + email + "','"+telefone+"','"+msg+"')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Dados Inseridos com Sucesso");
    });

  }

  );



}

module.exports = funcao;