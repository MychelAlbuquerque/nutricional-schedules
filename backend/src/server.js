const app = require('./app');
const mysqlConnection = require('./db');


app.get('/', (req, res) => {
  res.send('Server up!');
});

app.listen(3000, () => console.log('Online on port 3000'));

mysqlConnection();