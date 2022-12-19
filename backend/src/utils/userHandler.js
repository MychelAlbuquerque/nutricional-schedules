const fs = require('fs').promises;
const path = require('path');
const usersPath = path.resolve(__dirname, '../users.json');

const addUser = async (newUser) => {
  const users = JSON.parse(await fs.readFile(usersPath));
  const id = users.length + 1;
  users.push({ id, ...newUser });
  await fs.writeFile(usersPath, JSON.stringify(users));
};

module.exports = { addUser };