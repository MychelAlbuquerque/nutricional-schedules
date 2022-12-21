const fs = require('fs').promises;
const path = require('path');
const usersPath = path.resolve(__dirname, '../users.json');

const readUsers = async () => {
  const users = JSON.parse(await fs.readFile(usersPath));
  return users;
};

const addUser = async (newUser) => {
  const users = await readUsers();
  console.log(users);
  const id = users.length + 1;
  users.push({ id, ...newUser });
  await fs.writeFile(usersPath, JSON.stringify(users));
};

module.exports = { addUser, readUsers };