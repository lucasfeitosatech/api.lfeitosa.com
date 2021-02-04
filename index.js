// importar os módulos
const express = require('express');
const db = require('./util/dbHelper');


global.db = db.connection;
// iniciar o objeto do express
const app = express();
var cors = require('cors') 
app.use(cors())
 

// Escolhendo a porta do servidor
const port = 3000;
// setando o local a onde vai ficar os arquivos da views
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes'));



// parametrizar a porta de escuta
app.listen((process.env.PORT || port), () => console.log(`\uD83C\uDF0F runing at http://localhost${port}`));

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
  if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
      res.redirect(`https://${req.hostname}${req.url}`); //Redireciona pra HTTPS
  else //Se a requisição já é HTTPS
      next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
});

