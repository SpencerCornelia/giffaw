$(function() {

	$("#inputBox").on("change", function(event) {
		var userInput = ($(this).val());
		event.preventDefault();
		var userSearch = ("http://api.giphy.com/v1/gifs/search?q=" + userInput + "&api_key=dc6zaTOxFJmzC");
		$.get(userSearch, render);
	})
	var trendingPage = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=25"//&limit=25 <-- limits results to 25 at end
	$.get(trendingPage, newRender);
});

var render = function(data) {
	var newImages = data.data;
	newImages.forEach(function(item,i) {
		$("body").append("<img src='" + newImages[i].images.fixed_height.url + "'>");
	})
}

var newRender = function(data) {
	var newImages = data.data;
	newImages.forEach(function(item,i) {
		$("body").append("<img src='" + newImages[i].images.fixed_height.url + "'>");
	})
}