const express = require('express');
const birthValidation = require('../middlewares/birthValidation');
const emailValidation = require('../middlewares/emailValidation');
const nameValidation = require('../middlewares/nameValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const { addUser } = require('../utils/userHandler');

const router = express.Router();


router.post('/',
  nameValidation,
  emailValidation, 
  birthValidation, 
  passwordValidation, (req, res) => {
    addUser(req.body);
    return res.status(200).json();
  });


module.exports = router;