var contenu;
var mesArticles;

// je convertis mon article de Markdown à HTML côté admin
var converter = new showdown.Converter();

function convertion () {

	$("#textemarkdown").on('keyup', function() {
		var text = $("#textemarkdown").val();
		var html = converter.makeHtml(text);
    	console.log(html);
    	$("#textehtml").html(html);	
});	
}

convertion();

// j'envoie au serveur
$("#envoyer").click(function(){
	contenu = {
		"titre" : $("#title").val(),
		"texte" : $("#textemarkdown").val(),
	};
	 
	sauvegarde();
	$("#title").val("");
	$("#textemarkdown").val("");
});

function sauvegarde() {

	$.ajax({
		url : "http://192.168.1.50/json-db",
		data : {
			task : "set",
			key : "blogemilie",
			value : JSON.stringify(contenu)
		},  
	})
}

// je récupére la requête depuis le serveur
$.ajax({
	url :"http://192.168.1.50/json-db",
	data : {
		task : "get",
		key : "blogemilie"
	}
})
// une fois .done fait, j'affiche les articles sur la page publique et admin
.done(function(data) {
	mesArticles = JSON.parse(data);

	for (var i = 0; i < mesArticles.length; i++) {		
		$("#public").append("<ul><li>" + mesArticles[i]["titre"] + "</li></ul>");	
		$("#public").append("<ul><li>" + converter.makeHtml(mesArticles[i]["texte"]) + "</li></ul<");	
		console.log(mesArticles[i]);
		var id = mesArticles[i]._id;
		var titre = mesArticles[i].titre;
		console.log(id);
		$("#articles").append('<li class="titles" data-id="'+ id +'">' + titre + '</li>');
	}
})
.fail(function() {
	alert("error");
});

$("#articles").delegate('.titles','click',function() {
	console.log(this);
	var id = $(this).data('id');
	
	console.log(id);
	console.log(mesArticles);

	for (var i = 0; i < mesArticles.length; i++) {
		if (id === mesArticles[i]._id) {
			var html = converter.makeHtml(mesArticles[i].texte);
			console.log(mesArticles[i])
			$("#articles").html(html);
		}
	}
});


$.ajax({
	url :"http://192.168.1.50/json-db",
	data : {
		task : "get",
		key : "blogemilie"
	}
})
.done(function(data) {
	mesArticles = JSON.parse(data);

	for (var i = 0; i < mesArticles.length; i++) {		
		console.log(mesArticles[i]);
		var id = mesArticles[i]._id;
		var titre = mesArticles[i].titre;
		console.log(titre);
		$("#monTexte").append('<ul><li class="titles" data-id="'+ id +'">' + titre + '</li></ul> <button data-id="'+ id +'" class="supprimer" class="material-icons">delete</button>');
	}
})
.fail(function() {
	alert("error");
});

$("#monTexte").delegate('.titles','click',function() {
	console.log(this);
	var id = $(this).data('id');
	
	console.log(id);
	console.log(mesArticles);

	for (var i = 0; i < mesArticles.length; i++) {
		if (id === mesArticles[i]._id) {
			var html = mesArticles[i].texte;
			console.log(mesArticles[i])
			$("#Texte").html(html);
		}
	}
});

$("#monTexte").delegate('.supprimer','click',function() {
	console.log(this);
	var id = $(this).data('id');
	console.log(id);

	$.ajax({
		url:'http://192.168.1.50/json-db',
		data: {
		task: 'delete',
		_id: id
		}
	});
	
	$.ajax({
		url :"http://192.168.1.50/json-db",
		data : {
		task : "get",
		key : "blogemilie",
		}
	})
	.done(function(data) {
		$("#monTexte").html("");
		mesArticles = JSON.parse(data);

		for (var i = 0; i < mesArticles.length; i++) {		
			console.log(mesArticles[i]);
			var id = mesArticles[i]._id;
			var titre = mesArticles[i].titre;
			console.log(titre);
			$("#monTexte").append('<ul><li class="titles" data-id="'+ id +'">' + titre + '</li></ul> <button data-id="'+ id +'" class="supprimer" class="material-icons">delete</button>');
	}
})
	.fail(function() {
	alert("error");
});
});




$(".button-collapse").sideNav();

// j'affiche date et heure
var uneDate = new Date();

$("#date").html(uneDate);