$(window).load(function() {
	var $container = $('.portfolio-items');
	$container.isotope({
		filter: '*',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});

	$('.joy-categories a').click(function() {
		$('.joy-categories .active').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});
	
	$(".slide").click(function(){
		$(this).parent().toggleClass('slideToggle');
	})

});