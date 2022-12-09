const mysql = require('mysql');

const options = { connectionLimit :10, 
    user:'root' ,
    password: '123456789', 
    database: 'funcionariosdb', 
    host: 'localhost' , 
    port: 3306 } 
const db = mysql.createPool(options); 

db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
global.db = db;
module.exports = db;