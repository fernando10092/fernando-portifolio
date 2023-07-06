var mysql = require('mysql');

var abc = "abc inicial";
var sql = "SELECT * FROM dadosdb";

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "fernandoportifolio"
});



async function retornoMysql() {


  con.connect(function (err) {

    if (err) throw err;
    
    con.query(sql, function havana(err, result, fields) {

      //if (err) throw err;

      //console.log("RETORNO DENTRO DA FUNÇÃO: " + result[0]["nome"]);

      abc = result;

      console.log("ABBBBCCC: "+abc);

      havana("err", "result", "fields");

      //return abc = result[0]["nome"];
      

    }
    
    );

    

    return abc


    // abc = "######### CONSEGUI CARALHO #############";

    //console.log("CONSOLE.LOG DENTRO DO RETORNO: " + abc);

    //return abc;

  });

  console.log("FORA DO RETORNO: " + abc);



  return abc;



}

module.exports = retornoMysql;

