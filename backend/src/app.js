const express = require('express');

const app = express();
const questions = require('./routes/questions');
const login = require('./routes/login');

app.use(express.json());


//Routes
app.use('/questions', questions);
app.use('/login', login);


module.exports = app;

