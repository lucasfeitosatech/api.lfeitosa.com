const express = require('express');
const routes = new express.Router()
const indexController = require('./controllers/IndexController');
var cors = require('cors');


//Routes para IndexController
routes.get('/', indexController.index);
routes.get('/Teste',indexController.teste);
routes.get('/urls',cors(),indexController.urls);



module.exports = routes;
