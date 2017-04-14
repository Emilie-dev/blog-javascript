var contenu;




function afficher(data) {
	console.log(data);
	$("#public").html(data);	
}





$("#envoyer").click(function(){
	contenu = {
		"titre" : $("#titre").val(),
		"texte" : $("#texte").val(),
	};
	
	 
	sauvegarde();
	$("#titre").val("");
	$("#texte").val("");
});


// j'envoie au serveur

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
//	alert("done");
	afficher(data);
})/*
.fail(function() {
	alert("error");
})
.always(function() {
	alert("complete");
});*/



// j'affiche date et heure
 var uneDate = new Date();

 $("#date").html(uneDate);