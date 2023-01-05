const express = require('express');

const app = express();
const register = require('./routes/register');
const login = require('./routes/login');
const questions = require('./routes/questions');

app.use(express.json());

//Routes
app.use('/register', register);
app.use('/login', login);
app.use('/questions', questions);


module.exports = app;

