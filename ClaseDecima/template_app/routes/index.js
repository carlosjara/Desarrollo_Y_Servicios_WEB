var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ibiza', materias: [{name: "web",cred:1,compl:false},{name: "c",cred:2,compl:true},{name: "IA",cred:3,compl:false},{name: "Desarrollito",cred:2,compl:true}] });
});

module.exports = router;
