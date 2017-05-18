// je créais un nouveau fichier
$('#submit').click(function() {
	var title = $('#title').val();
	var article = $('#article').val();

	$.ajax({
		method:"POST",
		url:"/addFichier",
		data: {
			title: title,
			article: article,
		}
	}).done(function(e) {
		alert(e);
		window.location.replace("/publishFile");
	});

});

// j'affiche les articles
$.ajax({
	method:"GET",
	url:"/displayArticle",
	data: {}
}).done(function(e) {
	var mesObjets = JSON.parse(e);
	console.log(mesObjets[0].title);

	for (var i = 0; i < mesObjets.length; i++) {	
		$('#article').append("<ul><li>" + mesObjets[i]["title"] + "</li></ul>");
		$('#article').append("<ul><li>" + mesObjets[i]["article"] + "</li></ul>");

	$("#title").val("");
	$("#article").val("");
	};
})



