
$(document).ready(function() {
	$('.popup_button').click(function(){
		$(this).toggleClass('open');
	});
});

// Карусель.
// .owl-carousel.owl-theme
// 		.carousel-item
// 		.carousel-item
// 		.carousel-item
$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
	//	nav:true,
	//	dots:true,
		loop:true,
		center: true,
	//	margin: 10,
	//	autoWidth:true,
	//	items:1,
	//	autoplay:true,
	//	autoplayTimeout:2000,
	//	smartSpeed:1900,
		responsive: {0:{items:1}, 600:{items:2, center:false}, 900:{items:3}},
	});
});


$(document).ready(function(){

	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 1000) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});