const { readUsers } = require('../utils/userHandler');
async function loginVerification(req, res, next) {
  const users = await readUsers();
  const { email, password } = req.body;
  const userFound = users.filter((e) => e.email === email)[0];
  if (!userFound) {
    return res.status(400).json({
      message: 'Usuário não encontrado'
    });
  }
  if (userFound.password !== password) {
    return res.status(400).json({
      message: 'Senha inválida'
    });
  }
  next();
}

module.exports = loginVerification;
