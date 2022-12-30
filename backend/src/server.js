const app = require('./app');
const {mysqlConnection, createUsersTable } = require('./db');


app.get('/', (req, res) => {
  res.send('Server up!');
});

app.listen(3000, () => console.log('Online on port 3000'));

mysqlConnection();
createUsersTable();