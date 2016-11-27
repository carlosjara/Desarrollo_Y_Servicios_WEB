var express = require('express');
var bodyParser = require('body-parser');
var exphbs  = require('express-handlebars');
//Routes
var main = require('./routes/main');
var register = require('./routes/register');

var app = express();

app.use(express.static('public'));

var hbs = exphbs.create({});
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/',main);
app.use('/register',register);


app.listen(3000,function () {
    console.log('express-handlebars Corriendo en el puerto: 3000');
});