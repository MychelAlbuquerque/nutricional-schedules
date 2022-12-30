const app = require('./app');
const mysql = require('mysql2');

const mysqlConfig = {
  host: 'mysql_server',
  user: 'admin',
  password: 'root',
  database: 'NutriDb'
};

const mysqlConnection = () =>{
  const connection = mysql.createConnection(mysqlConfig);
  connection.connect(function(err){
    if(err) console.log(err);
    else console.log('MySql Connected');
  });
};
mysqlConnection();


app.get('/', (req, res) => {
  res.send('Server up!');
});

app.listen(3000, () => console.log('Online on port 3000'));