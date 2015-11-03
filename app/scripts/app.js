import 'svg4everybody';
import $ from 'jquery';
import 'slick-carousel';

$(() => {
	var $box = $('.news__box'),
		$content = $('.js-content');

	$('#main-slider').slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 6000
	});

	$('.js-description').on('click', function() {
		var $this = $(this),
			$parent = $this.closest('.news__box');


		if ($parent.hasClass('is-active')) {
			$box.removeClass('is-active');
			$content.removeClass('is-active');
		} else {
			$box.removeClass('is-active');
			$content.removeClass('is-active');
			$parent.addClass('is-active');
			$content.eq($parent.index()).addClass('is-active');
		}

	});

});
