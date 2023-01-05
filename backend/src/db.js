const mysql = require('mysql2');

const mysqlConfig = {
  host: 'mysql_server',
  user: 'admin',
  password: 'root',
  database: 'NutriDb'
};

const connection = mysql.createConnection(mysqlConfig);
const mysqlConnection = () => {
  connection.connect(function (err) {
    if (err) console.log(err);
    else console.log('MySql connected');
  });
};

const createUsersTable = () => {
  connection.connect(function (err) {
    if (err) throw err;
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INT NOT NULL AUTO_INCREMENT,
        user_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        birthdate DATE NOT NULL,
        user_password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=INNODB;
      `;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('Users Table Created');
    });
  });
};

const insertUser = (body) => {
  const date = body.birthDate.split('/').reverse().join('/');
  connection.connect(function (err) {
    if (err) throw err;
    const sql = `
      INSERT INTO users (user_name, email, birthdate, user_password) VALUES (
        '${body.name}',
        '${body.email}',
        '${date}',
        '${body.password}');`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log('New user added');
    });
  });
};



module.exports = { mysqlConnection, createUsersTable, insertUser };