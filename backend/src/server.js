const app = require('./app');
const {mysqlConnection, createUsersTable } = require('./db');


app.get('/', (req, res) => {
  res.send('Server up!');
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Online on port ${PORT}`));

mysqlConnection();
createUsersTable();