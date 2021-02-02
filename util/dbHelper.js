const mysql  = require('mysql');

exports.connection = mysql.createConnection({
  host     : 'mysql742.umbler.com',
  port     : 41890,
  user     : 'lfeitosa',
  password : 'Lucas159753',
  database : 'lfeitosa'
});


exports.execSQLQuery = function execSQLQuery(sqlQry, res){
 
  let conn = exports.connection;

  conn.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      conn.end();
      console.log('executou!');
  });
}


