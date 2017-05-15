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
//nodefs
function addData(dir, req, res) {
	var addArticles = {
		"title" : data.title,
		"article" : data.article,
	}

	nodefs.readfile(dir, function(err, data) {
		obj = JSON.parse(data);
		if(err) {
			res.send('error');
		}
		obj.push(addArticles);
		json = JSON.stringify(obj);
		nodefs.writeFile('blog.json', json, function(err) {
			if(err) {
				res.send('error');
			}else {
				res.send('success');
			}
		});
	});	
}

var myArticles = 

	res.render('public', {
		mesArticles:myArticles,
	});
});




