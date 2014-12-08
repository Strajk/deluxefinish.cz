$(function() {

	initRelativeAnchors();

	$(window).scroll(function () {scroll_nav();});
	$(window).load(function () {scroll_nav();});
	scroll_nav();

	initMontage();

	$('#section-portfolio-button-more a').click(function(e) {
		e.preventDefault();
		$(this).closest('section').find('.item.hidden').show();
		$(this).hide();
		$('#section-nav').scrollSpy('refresh');
	});

	$('a.fancybox-trigger, a.fancybox-trigger-html').hover(function(e) {
		var overlay = $(this).find('.image-overlay');
		if (overlay) {
			overlay.show();
		}
	}, function(e) {
		var overlay = $(this).find('.image-overlay');
		if (overlay) {
			overlay.hide();
		}
	});

	$("#section-kontakt-vpravo-dopis-button").click(function(e) {
       e.preventDefault();
       $(this).closest("form").submit();
	});


	$('.slider-init').each(function() {
        $(this).bxSlider({
	        controls: $(this).hasClass('slider-controls') ? true : false,
	        captions: $(this).hasClass('slider-captions') ? true : false,
	        displaySlideQty: $(this).hasClass('slider-one') ? 1 : ($(this).hasClass('slider-two') ? 2 : ($(this).hasClass('slider-three') ? 3 : ($(this).hasClass('slider-four') ? 4 : 9))),
	        moveSlideQty: $(this).hasClass('slider-one') ? 1 : ($(this).hasClass('slider-two') ? 2 : ($(this).hasClass('slider-three') ? 3 : ($(this).hasClass('slider-four') ? 4 : 9))),
	        pager: $(this).hasClass('slider-pager') ? true : false,
	        auto: $(this).hasClass('slider-auto') ? true : false,

	        mode: 'horizontal',
	        speed: 250,
	        infiniteLoop: false,
	        prevText: '«',
	        prevImage: '',
	        nextText: '»',
	        nextImage: '',
	        startingSlide: 0,
	        easing: 'swing'
        });
    });

	$(".fancybox-trigger").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	350,
		'speedOut'		:	200,
		'overlayShow'	:	true
	});

	$(".fancybox-trigger-html").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	350,
		'speedOut'		:	200,
		'overlayShow'	:	true,
		'titleShow'		:   false,
		'width'         :   300,
		'height'        :   200,
		'padding'       :   30,
		'autoScale'     :   false,
		'autoDimensions':   false
	});

	$('#section-nav').scrollSpy()

});

function scroll_nav() {
	var offsetfilter = $("#section-nahore").height() + $('#section-expo').height() + 50; // 54 = #section-expo bottom margin
	var scrollY = $(window).scrollTop();
	var menu = $('#section-nav ul');
	if (scrollY > offsetfilter) {
		menu
			.css('position', 'fixed')
			.css('top', '4px');
	} else {
		menu
			.css('position', 'relative')
			.css('top', '0px');
	}
}

function initMontage() {
	var container = $('#am-container');
	var	imgs = container.find('img').hide();
	var	totalImgs = imgs.length;
	var	cnt = 0;

	imgs.each(function(i) {
		var img = $(this);
		$('<img/>').load(
			function() {
				++cnt;
				if (cnt === totalImgs) {
					imgs.show();
					container.montage({
						liquid: false,
						fillLastRow: true,
						alternateHeight: true,
						alternateHeightRange: {min: 140, max: 240},
						margin: 0
					});
				}
			}).attr('src', img.attr('src'));
	});
}

function initRelativeAnchors() {
	$('a[href^=#]').click(function (e) {
		e.preventDefault();
		$.scrollTo($(this).attr('href'), 500, {offset: 0});
	});
}