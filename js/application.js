$(function(){
	$.getJSON('http://www.missiodigio.com/ilovequotes/get_quote.php?callback=?', function(data) {
  		$('#main_body').html(data.quote.replace(/(\r\n|\n|\r)/gm,"<br>"));
	});
});