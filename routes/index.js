var express = require('express');
var router = express.Router();
const Usuario = require("../controllers/UsuarioController")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get(`/funcionarios`, Usuario.Data)
router.post(`/funcionarios`, Usuario.receber)
module.exports = router;
