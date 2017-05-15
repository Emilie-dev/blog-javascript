var express = require('express');
var bodyParser = require('body-parser');
var nodefs = require('fs');
var pug = require('pug');
var markdown = require('markdown').markdown;

var app = express();

app.listen(3000, function() {
	console.log('Server OK, port 3000!');
});

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//routes
app.use(express.static(__dirname + '/'));

//template
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/admin', function (req, res) {
  res.render('admin', {});
});

app.get('/public', function(req, res) {
	res.render('public', {});
});


//Markdown
var content;
var myarticles;

function markdownconvertion() {
	var HTML_content = md(); 
}

markdownconvertion();
		