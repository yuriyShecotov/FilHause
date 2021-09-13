@@include('jquery-1.11.0.min.js')
@@include('slick.min.js')
$(document).ready(function () {
	$('.titel__slaider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		dots: true,
		infinite: true,
		speed: 2000,
		cssEase: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
		arrows: false
	});
	$('.card__slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		cssEase: 'linear',
	});
	$('.productcontainer__slider').slick({
		adaptiveHeight: true,
		infinite: false,
		prevArrow: '#prev',
		nextArrow: '#next'
	});
	if(matchMedia){
		var screenSlider = window.matchMedia("(max-width:832px)");
		screenSlider.addListener(equipmentSlider);
		equipmentSlider(screenSlider);
	}
	function equipmentSlider(screenSlider){
		if(screenSlider.matches){
			$('.equipment__blockslider').slick({
				adaptiveHeight: true,
				infinite: false,
				prevArrow: '#equipmentPrev',
				nextArrow: '#equipmentNext'
			});
		}else{
			$('.equipment__blockslider').slick('unslick');
		}
	}
});
(function(){
	let filterButton = document.getElementsByClassName('content__buttonfilter');
	for(let i = 0; i < filterButton.length; i++){
		filterButton[i].addEventListener('click',function(){
			this.classList.toggle('active');
			var filter = document.getElementsByClassName('filter');
			filter[i].style.display = (filter[i].style.display == 'none') ? 'flex' : 'none'
			
		});
	}
	if(matchMedia){
		let screen = window.matchMedia("(max-width:570px)");
		var filter = document.getElementsByClassName('filter');
		screen.addListener(chenges);	
		chenges(screen);
	}
	function chenges(screen) {
		if(screen.matches){
			filter[0].style.display = 'none';
		}else{
			filter[0].style.display = '';
		}
	}
})();
