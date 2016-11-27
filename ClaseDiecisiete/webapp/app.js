var express = require('express');
var bodyParser = require('body-parser');
//var exphbs = require('express-handlebars');
var path = require('path');
var hbs = require('hbs');


// Express configuration
var app = express();
app.use(express.static('public'));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'server/views'));


var blocks = {};
hbs.registerHelper('extend', function(name, context) {
    var block = blocks[name];
    if (!block) {
        block = blocks[name] = [];
    }

    block.push(context.fn(this));
});

hbs.registerHelper('block', function(name) {
    var val = (blocks[name] || []).join('\n');

    // clear the block
    blocks[name] = [];
    return val;
});


// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', require('./server/routes/main'));
app.use('/bookmarks', require('./server/routes/bookmarks'));

app.listen(3000);