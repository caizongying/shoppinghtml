var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
}); 
connection.connect();
var  sql = 'SELECT * FROM product where id=1';


 connection.query(sql, function (error, results, fields) {
 if (error) throw error;
   console.log(results);
});