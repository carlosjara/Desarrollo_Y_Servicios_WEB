var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
var app = express();

app.use(express.static('public'));

var hbs = exphbs.create({});
app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Express Server Init');
})

app.post('/register',function(req,res){
	res.render('welcome', req.body);
});

app.listen(3000,function () {
    console.log('express-handlebars Corriendo en el puerto: 3000');
});