const express = require('express');
const emailValidation = require('../middlewares/emailValidation');
const loginVerification = require('../middlewares/loginVerification');
const passwordValidation = require('../middlewares/passwordValidation');
const router = express.Router();


router.post('/', emailValidation, passwordValidation, loginVerification, (req, res) => {
  return res.status(200).json();
});
router.get('/', (req, res) => {
  return res.status(200).json('Olá');
});


module.exports = router;