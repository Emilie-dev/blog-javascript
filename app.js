var contenu;

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
// une fois .done fait, j'affiche les articles sur la page publique
.done(function(data) {
	var mesArticles = JSON.parse(data);

	for (var i = 0; i < mesArticles.length; i++) {		
		$("#public").append("<ul><li>" + mesArticles[i]["titre"] + "</li></ul>");	
		$("#public").append("<ul><li>" + converter.makeHtml(mesArticles[i]["texte"]) + "</li></ul<");	
		console.log(mesArticles[i]);
	}	
})
.fail(function() {
	alert("error");
});









// j'affiche date et heure
var uneDate = new Date();

$("#date").html(uneDate);