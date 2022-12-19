function birthValidation(req, res, next) {
  const { birthDate } = req.body;
  const dateFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}/;
  if (!birthDate) {
    return res.status(400).json({
      message: 'O campo data de nascimento é obrigatório'
    });
  }
  if(!dateFormat.test(birthDate)){
    return res.status(400).json({
      message: 'O campo data de nascimento deve ter o formato "dd/mm/aaaa"'
    });
  }
  next();
}

module.exports = birthValidation;
