$(function(){
  $('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.gallery__slider').slick({
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"> <img src="images/arrow-right.png" alt=""></button>',
	});

	$('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});
});