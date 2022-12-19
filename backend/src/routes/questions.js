const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  return res.status(200).json('post questions');
});


module.exports = router;