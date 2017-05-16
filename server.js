var express = require('express');
var bodyParser = require('body-parser');
var nodefs = require('fs');
var pug = require('pug');

var app = express();

app.listen(3000, function() {
	console.log('Server OK, port 3000!');
});

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));


//template
app.set('views', './views');
app.set('view engine', 'pug');






app.get('/blog', function (req, res) {
  res.render('public', {});
});



app.get('/formulaireAjoutFichier', function(req, res) {
	res.render('admin', {});
});

//nodefs
app.post('/addFichier', function(req, res) {

	var addArticle = req.body;
	console.log(req.body);

	nodefs.readFile('blog.json', function(err, data) {
		var obj = JSON.parse(data);
		if(err) {
			res.send('error');
		}
		obj.push(addArticle);
		json = JSON.stringify(obj);

		nodefs.writeFile('blog.json', json, function(err) {
			if(err) {
				res.send('error');
			}else {
				res.send('success');
			}
		});
	});

});



	
	







