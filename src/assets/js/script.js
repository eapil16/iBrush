'use strict';
document.addEventListener('DOMContentLoaded', () => {

	setTimeout(function() {
		$('select').styler();
	}, 100);

	const newlider = new Swiper('.news-slider', {
		speed: 800,
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		pagination: {
			el: '.news-slider-pagination',
			clickable: true,
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 30,
				loop:false,
			}
		},
	});

	document.querySelector('body').addEventListener('click',e => {
		// modal
		if (e.target.closest('.modal-show')) {
			e.preventDefault();
			document.querySelector('.modal').classList.add('show');
			document.querySelector('body').classList.add('hidden');
			document.querySelector('.menu-toggle-cont').classList.remove('menu-toggle-cont_active');
			document.querySelector('.fixed-menu').classList.remove('show');
			document.querySelector('body').classList.remove('hidden-body')
		}
		if (e.target.closest('.modal-close')) {
			e.preventDefault();
			document.querySelector('.modal').classList.remove('show');
			document.querySelector('body').classList.remove('hidden')
		}
		if (!e.target.closest('.modal-show') && !e.target.closest('.modal-content')) {
			document.querySelector('.modal').classList.remove('show');
			document.querySelector('body').classList.remove('hidden')
		}
		// mobile menu
		if (e.target.closest('.menu-toggle-cont')) {
			e.target.closest('.menu-toggle-cont').classList.toggle('menu-toggle-cont_active');
			document.querySelector('.fixed-menu').classList.toggle('show');
			document.querySelector('body').classList.toggle('hidden-body');
		}
		// rating 
		if (e.target.closest('.rating-area input')) {
			document.querySelector('.rating-grade').innerHTML = e.target.closest('.rating-area input').value;
		}
	})

	const ps = new
		PerfectScrollbar('.banner-content__block', {
		wheelSpeed: 2,
		minScrollbarLength: 20,
		suppressScrollY:true,
		swipeEasing:true,
	});

	window.addEventListener('resize', function () {
		ps.update();
	});

});
