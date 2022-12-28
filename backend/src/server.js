const app = require('./app');
// const db = require('./db');

app.get('/', (req, res) => {
  res.send('Server Up!');
});

app.listen(3000, () => console.log('Online on port 3000'));