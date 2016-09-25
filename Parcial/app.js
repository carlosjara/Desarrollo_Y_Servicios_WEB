var express = require('express');
var exphbs  = require('express-handlebars');
var bodyParser = require('body-parser');

var router = express.Router();

var routes = require('./routes/index');
var bm_edit = require('./routes/edit');
var bm_new = require('./routes/newbookmark');
var bm_add = require('./routes/add');
var bm_delete= require('./routes/delete');
var bm_edited= require('./routes/edited');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use('/',routes);
app.use('/edit',bm_edit);
app.use('/new',bm_new);
app.use('/add',bm_add);
app.use('/edited',bm_edited);
app.use('/delete',bm_delete);


//Codigo tomado de app.js (Class-Template)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000,function () {
    console.log('express-handlebars Corriendo en el puerto: 3000');
});
//    <form class="form-signin" action="/new" method="GET">
//        <button class="btn btn-lg btn-success btn-block" type="submit">Iniciar</button>
//    </form>