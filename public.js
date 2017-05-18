// je récupére et j'affiche les articles
$.ajax({
	method:"GET",
	url:"/displayArticle",
	data: {}
}).done(function(e) {
	var mesObjets = JSON.parse(e);
	console.log(mesObjets[0].title);

	for (var i = 0; i < mesObjets.length; i++) {	
		$('#text').append("<ul><li>" + mesObjets[i]["title"] + "</li></ul>");
		$('#text').append("<ul><li>" + mesObjets[i]["article"] + "</li></ul>");
	};
})
