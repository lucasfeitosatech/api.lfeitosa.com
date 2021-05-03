const path = require('path');

module.exports = {
  async index(req, res) {
    // res.send('index.jsx');
    res.sendFile(path.join(__dirname, '../static/index.html'));
  },
  async teste(req, res) {
    var sql = 'SELECT * FROM Post';
    db.query(sql, function (err, results) {
      if (results.length != null && results.length >= 1) {
        console.log(results[0].id);
        results = results.map(v => Object.assign({}, v));
        res.send(results);
      }
      else {
        message = 'Credenciais inválidas';
        res.render('login.ejs', { message: message });
      }
    });
  }
};