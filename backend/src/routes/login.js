const express = require('express');
const emailValidation = require('../middlewares/emailValidation');
const loginVerification = require('../middlewares/loginVerification');
const passwordValidation = require('../middlewares/passwordValidation');
const router = express.Router();
const mysql = require('mysql2');
const { fetchUsers } = require('../db');

const mysqlConfig = {
  host: 'mysql_server',
  user: 'admin',
  password: 'root',
  database: 'NutriDb'
};

const connection = mysql.createConnection(mysqlConfig);


router.post('/', emailValidation, passwordValidation, loginVerification, (req, res) => {
  return res.status(200).json();
});


router.get('/fetch', (req, res) => {
  connection.connect(function (err) {
    if (err) throw err;
    const sql = 'SELECT * FROM users';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      res.status(200).json(result);
    });
  });
});

module.exports = router;