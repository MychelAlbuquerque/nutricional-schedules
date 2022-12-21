function passwordValidation(req, res, next) {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({
      message: 'O campo senha é obrigatório'
    });
  }
  if (password.length < 6) {
    return res.status(400).json({
      message: 'O campo senha deve ter pelo menos 6 dígitos'
    });
  }
  next();
}

module.exports = passwordValidation;
