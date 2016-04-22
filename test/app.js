var express = require('express');
var app = express();
var router = express.Router();
var jade = require('jade');

app.set('view engine','jade');

app.use((req,res,next) => {
    console.log(req.method + ' -> ' + req.path);
    next();
});

app.use(express.static('./'));
app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8181);
