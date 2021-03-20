@@include('jquery-1.11.0.min.js')
@@include('slick.min.js')
$(document).ready(function () {
	$('.titel__slaider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});
	$('.card__slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear'
	});

});