module.exports = {
  async index(req,res) {
      res.render('index.jsx');
  },
  async teste(req,res){
    var sql = 'SELECT * FROM Post';
    db.query(sql, function(err, results){      
      if(results.length != null && results.length >= 1){
         req.session.userId = results[0].id;
         req.session.user = results[0];
         console.log(results[0].id);
         res.send(JSON.parse(results));
      }
      else{
         message = 'Credenciais inválidas';
         res.render('login.ejs',{message: message});
      }
    });
  }
};