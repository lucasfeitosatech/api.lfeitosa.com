module.exports = {
  async index(req,res) {
      res.render('index.jsx');
  },
  async teste(req,res){
      res.send('Testando rotas no servidor 123456');
  }
};