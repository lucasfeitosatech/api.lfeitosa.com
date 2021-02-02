// importar os módulos
const express = require('express');
const { createEngine } = require('express-react-views');
// iniciar o objeto do express
const app = express();
// Escolhendo a porta do servidor
const port = 3000;
// setando o local a onde vai ficar os arquivos da views
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes'));

// parametrizar a porta de escuta
app.listen((process.env.PORT || port), () => console.log(`\uD83C\uDF0F runing at http://localhost${port}`));

