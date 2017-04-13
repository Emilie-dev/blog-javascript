var blog = [];
var titre = "";
var texte = "";

$("#titre").keyup(function(){
	titre = $("#titre").val();
})

$("#texte").keyup(function() {
	texte = $("#texte").val();
})

var contenu = {"titre" : titre, "texte" : texte}
$("#titre").val();
$("#texte").val();
blog.push(contenu);

$.ajax({
	url : "http://192.168.1.50/json-db"
	data : {
		task : "set",
		key : "blogemilie",
		value : JSON.stringify(blog),
	},
   
})

	$.ajax({
		url :"http://192.168.1.50/json-db",
		data : {
		task : "get",
		key : "blogemilie",
		}
	})
	.done(function() {
		alert("done");
	})
	.fail(function() {
		alert("error");
	})
	.always(function() {
		alert("complete");
	});
   


