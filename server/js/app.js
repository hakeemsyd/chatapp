var express = require('express');
var app = express();

var port = process.env.PORT || 5000;
app.use(express.static('../../clients/angular/css'));
app.use(express.static('../../clients/angular/lib'));
app.use(express.static('../../clients/angular/views'));

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(port, function(err){
    console.log('running server on port ' + port);
});

