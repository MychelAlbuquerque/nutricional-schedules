const express = require('express');
const birthValidation = require('../middlewares/birthValidation');
const emailValidation = require('../middlewares/emailValidation');
const nameValidation = require('../middlewares/nameValidation');
const router = express.Router();


router.post('/', nameValidation, emailValidation, birthValidation, (req, res) => {
  return res.status(200).json(req.body);
});


module.exports = router;