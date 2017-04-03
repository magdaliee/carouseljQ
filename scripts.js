$(function(){
	var carouselList = $("#carousel ul");
	//setInterval(changeSlide, 3000);
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
		carouselList.css({marginRight:-500});
	};

	function changeSlidePrev() {
		carouselList.animate({'marginRight':0}, 1000, moveLastSlide);
	};

	var nextSlide = $("#right");
	nextSlide.click(function () {
		changeSlideNext();
	});

	var prevSlide = $("#left");
	prevSlide.click(function () {
		changeSlidePrev();
});
});
