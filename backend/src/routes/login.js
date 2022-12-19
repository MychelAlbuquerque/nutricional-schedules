const express = require('express');
const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');
const router = express.Router();


router.post('/', emailValidation, passwordValidation, (req, res) => {
  return res.status(200).json();
});


module.exports = router;