module.exports = {
  async index(req,res) {
      res.send('index.jsx');
  },
  async teste(req,res){
    var sql = 'SELECT * FROM Post';
    db.query(sql, function(err, results){      
      if(results.length != null && results.length >= 1){
         console.log(results[0].id);
         results = results.map(v => Object.assign({}, v));
         res.send(results);
      }
      else{
         message = 'Credenciais inválidas';
         res.render('login.ejs',{message: message});
      }
    });
  },
  async urls(req,res){
    var j = [
      {
        "chave": "BASE_URL",
        "valor": "https://hom.tiquei.com.br/"
      },
      {
        "chave": "EXTERNAS",
        "valor": "https://hom.tiquei.com.br/accesstage-api-externas"
      },
      {
        "chave": "PRODUTOS",
        "valor": "https://hom.tiquei.com.br/accesstage-api-produtos"
      },
      {
        "chave": "TIQUEI",
        "valor": "https://hom.tiquei.com.br/accesstage-api-tiquei"
      },
      {
        "chave": "OPERADORAS",
        "valor": "https://hom.tiquei.com.br/accesstage-api-portal-operadoras"
      },
      {
        "chave": "API_PORTAL",
        "valor": "https://hom.tiquei.com.br/accesstage-api-portal"
      },
      {
        "chave": "TIQUEI_ANTIGO",
        "valor": "https://hom.tiquei.com.br/tiquei-api"
      }
    ];
    res.send(j);
  }
};