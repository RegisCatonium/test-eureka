document.addEventListener('DOMContentLoaded', function() {

	const sliderTerm = document.getElementById('slider-term')

	noUiSlider.create(sliderTerm, {
		start: 60,
		connect: 'lower',
		step: 1,
		range: {
			 'min': 1000,
			 'max': 10000
		}
	})

	const sliderCertificate = new Swiper('#certificate', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 31,
		grabCursor: true,
		speed: 800,
		navigation: {
			prevEl: '#certificate-btn-prev',
			nextEl: '#certificate-btn-next',
		},
		breakpoints: {
			601: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		}
	})
	const sliderPartners = new Swiper('#partners', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 115,
		grabCursor: true,
		speed: 800,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		},
		breakpoints: {
			601: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		}
	})
	// синхронизация слайдеров liderCertificate и sliderPartners
	const swipeAllSliders = (index) => {
		sliderCertificate.slideToLoop(index);
		sliderPartners.slideToLoop(index);
	 };
	 
	 sliderCertificate.on('slideChange', () => swipeAllSliders(sliderCertificate.realIndex));
	 sliderPartners.on('slideChange', () => swipeAllSliders(sliderPartners.realIndex));
	// --

	 const sliderreviews = new Swiper('#reviews', {
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		speed: 800,
		navigation: {
			prevEl: '#reviews-btn-prev',
			nextEl: '#reviews-btn-next',
		},
		breakpoints: {
			601: {
				slidesPerView: 2,
				slidesPerGroup: 1,
			},
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		}
	})
})

