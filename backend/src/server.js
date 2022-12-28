const app = require('./app');
const ip = require('ip');
const PORT = process.env.SERVER_PORT || 3000;

app.get('/', (req, res) =>{
  res.send('Server UP!');
});

app.listen(PORT, () => console.log(`Online on port ${ip}: ${PORT}`));