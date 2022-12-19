const express = require('express');
const nameValidation = require('../middlewares/nameValidation');
const router = express.Router();


router.post('/', nameValidation, (req, res) => {
  return res.status(200).json();
});


module.exports = router;