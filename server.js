var express = require('express');
var app = express();

app.set('port', 8080);
app.set('title', 'Example');
app.use(express.static(__dirname + '/client'));

function NotFound(msg){
    this.name = 'NotFound';
    Error.call(this, msg);
    Error.captureStackTrace(this, arguments.callee);
}

NotFound.prototype.__proto__ = Error.prototype;

app.get('/404', function(req, res){
    throw new NotFound;
});

app.get('/500', function(req, res){
    throw new Error('keyboard cat!');
});

app.get('/share', function(req, res){
    res.send('ok');
});

if (!module.parent) {
    app.listen(app.get('port'));
}
