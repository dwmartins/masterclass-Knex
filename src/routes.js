const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

app.get('/users', UserController.index);

module.exports = routes;