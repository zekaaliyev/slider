const swiper = new Swiper('.swiper', {
	loop: true,
  speed:1500,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay:{
       delay:4000,
	     disableOnInteraction:false,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	keyboard: true,
	mousewheel: true,

	// effect: 'creative',
	// creativeEffect: {
	// 	prev: {
	// 		// will set `translateZ(-400px)` on previous slides
	// 		translate: [0, 0, -400],
	// 	},
	// 	next: {
	// 		// will set `translateX(100%)` on next slides
	// 		translate: ['100%', 0, 0],
	// 	},
	// },
	// effect: 'coverflow',
})
