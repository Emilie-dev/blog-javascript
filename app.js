$(document).ready(function(){

var contenu;


// je convertis mon article de Markdown à HTML côté admin
var converter = new showdown.Converter();

function convertion () {
	

	$("#textemarkdown").on('keyup', function() {
		var text = $("#textemarkdown").val();
		var html = converter.makeHtml(text);
    	console.log(html);
    	$("#textehtml").val(html);

	
});
	
}

convertion();


// j'envoie au serveur

$("#envoyer").click(function(){
	contenu = {
		//"titre" : $("#titre").val(),
		"texte" : $("textehtml").val(),
	};

	 
	sauvegarde();
	//$("#titre").val("");
	$("#textehtml").val("");
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


// je récupére depuis le serveur

$.ajax({
	url :"http://192.168.1.50/json-db",
	data : {
		task : "get",
		key : "blogemilie"
	}
})
.done(function(data) {
	alert("done");
	afficher(data);
})
.fail(function() {
	alert("error");
})
.always(function() {
	alert("complete");
});



// j'affiche les articles sur la page publique

function afficher(data) {
	console.log(data);
	$("#public").html(data);	
}







// j'affiche date et heure
 var uneDate = new Date();

 $("#date").html(uneDate);

});