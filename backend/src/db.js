const sequelize = require('sequelize');

const connection = new sequelize('usersdb', 'root', '12345678', {
  host: 'localhost:3308',
  dialect: 'mysql'
});

connection.authenticate()
  .then(() => {
    console.log('Successful database connection! ');
  }).catch(() => {
    console.log('Error: unsuccessful database connection');
  });

module.exports = connection;