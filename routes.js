const express = require('express');
const routes = new express.Router()
const indexController = require('./controllers/IndexController');


//Routes para IndexController
routes.get('/', indexController.index);
routes.get('/Teste',indexController.teste);



module.exports = routes;
