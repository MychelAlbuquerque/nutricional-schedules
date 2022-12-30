const mysql = require('mysql2');

const mysqlConfig = {
  host: 'mysql_server',
  user: 'admin',
  password: 'root',
  database: 'NutriDb'
};

const mysqlConnection = () =>{
  const connection = mysql.createConnection(mysqlConfig);
  connection.connect(function(err){
    if(err) console.log(err);
    else console.log('MySql connected');
  });
};

module.exports = mysqlConnection;