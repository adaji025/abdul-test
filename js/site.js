$(document).ready(function(){

	// Write any custom scripts here
	$('.next').on('click', function(){
		var currentImg = $('.slider-active');
		var nextImg = currentImg.next();

		if(nextImg.length){
			currentImg.removeClass('slider-active').css('z-index', -10);
			nextImg.addClass('slider-active').css('z-index', 10)
		}
	});

	$('.prev').on('click', function(){
		var currentImg = $('.slider-active');
		var prevImg = currentImg.prev();

		if(prevImg.length){
			currentImg.removeClass('slider-active').css('z-index', -10);
			prevImg.addClass('slider-active').css('z-index', 10)
		}
	});

});