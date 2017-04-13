var  = {name:"emilie"}

$.ajax({
	url : "http://192.168.1.50/json-db"
	data : {
		task : "set",
		key : "blogemilie",
		value : JSON.stringify(),
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
   


