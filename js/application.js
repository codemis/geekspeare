$(function(){
	isLoading();
	getQuote();
	$('a.refresh_link').click(function() {
		isLoading();
		getQuote();
		return false;
	});
});
function getQuote() {
	$.getJSON('http://www.missiodigio.com/ilovequotes/get_quote.php?callback=?', function(data) {
  		$('#main_body').html(data.quote.replace(/(\r\n|\n|\r)/gm,"<br>"));
  		var img = $('<img/>').addClass('refresh_icon').attr('src', 'img/refresh.png');
  		$('a.refresh_link').html('').append(img);
	});
};
function isLoading() {
	var img = $('<img/>').addClass('loading_icon').attr('src', 'img/loading.gif');
  	$('a.refresh_link').html('').append(img);
};