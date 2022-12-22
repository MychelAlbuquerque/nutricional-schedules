const app = require('./app');

app.get('/', (req, res) =>{
  res.send('Hello!');
});

app.listen(3000, () => console.log('Online on port 3000'));