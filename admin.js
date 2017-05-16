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
	});

});