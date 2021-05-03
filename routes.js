const express = require('express');
const routes = new express.Router()
const indexController = require('./controllers/IndexController');



//Routes para IndexController
routes.get('/', indexController.index);



module.exports = routes;
