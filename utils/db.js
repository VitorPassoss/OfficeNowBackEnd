const mysql = require('mysql');

const options = { connectionLimit :10, 
    user:'freedb_vitordev2' ,
    password: 'ZhQb2$tAzaf9#FP', 
    database: 'freedb_oficce', 
    host: 'sql.freedb.tech' , 
    port: 3306 } 
const db = mysql.createPool(options); 

db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
global.db = db;
module.exports = db;