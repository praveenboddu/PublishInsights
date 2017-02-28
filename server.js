var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

// make express look in the public directory for assets (css/js/img)
app.use('/stylesheets', express.static(__dirname + '/stylesheets'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(express.static(__dirname + '/'));

// set the home page route
app.get('/', function(req, res) {

    res.sendFile('/index.html', { root: __dirname });

});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});