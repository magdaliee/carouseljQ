$(function(){
	var carouselList = $("#carousel ul");
	var myVar = setInterval(changeSlideNext, 3000);
	function changeSlideNext() {
		carouselList.animate({'marginLeft': -500}, 1000, moveFirstSlide);
	};
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	function moveLastSlide () {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:0});
	};

	function changeSlidePrev() {
		carouselList.animate({'marginLeft':500}, 1000, moveLastSlide);
	};

	var nextSlide = $("#right");
	nextSlide.click(function () {
		clearInterval(myVar);
		changeSlideNext();
	});

	var prevSlide = $("#left");
	prevSlide.click(function () {
		clearInterval(myVar);
		changeSlidePrev();
});
});
