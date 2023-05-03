const express = require('express');
const { UserController } = require('../database/controller');
const ErrorHandler = require('../database/middlewares/ErrorHandler');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.get('/users', UserController.getAll);
app.post('/users', UserController.createUser);

app.use(ErrorHandler.handle);
module.exports = app;

// iniciando projeto.....