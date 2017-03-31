$(function(){
	var carouselList = $("#carousel ul");
	var changeslide = setInterval(function() {
		$ (carouselList).animate({marginLeft:-400},1000,function() {
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});
		})
	},3000);
});
