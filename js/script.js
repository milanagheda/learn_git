/*===== Document Ready ====*/
(function($){

/*===== Add Browser + Os Class ====*/

	var os = ['iphone','ipad','windows','mac','linux'];
	var platform = navigator.userAgent.toLowerCase().match(new RegExp(os.join('|')));
	var browsers = ['firefox','safari','chrome','msie'];
	var browser = navigator.userAgent.toLowerCase().match(new RegExp(browsers.join('|')));
	if (platform[0]) {
	 $('body').addClass(platform[0] + ' '+ browser);
	};

/*===== Add Browser + Os Class ====*/

})(jQuery);

/*===== End Document Ready ====*/

/*===== Window Load ====*/
$(window).load(function(){

/*===== Background Placeholder ====*/
	$('.bg-place-holder').each(function(){
		var imgSrc= $(this).children('img').attr('src');
		$(this).css('background-image', 'url("' + imgSrc + '")');
		$(this).children('img').hide();
	});
/*===== Background Placeholder ====*/

landing_page_height();
$(window).resize(landing_page_height);

/*===== Introduction alignVertical ====*/
	alignVertical();
	$(window).resize(function(){
		alignVertical();
	});
/*===== Introduction alignVertical ====*/

});
/*===== End Window Load ====*/

/*==== verticle align center ====*/
function alignVertical(){

	$('.align-vertical').each(function(){
		var that = $(this);
		var height = that.height();
		var parentHeight = that.parent().height();
		var padAmount = (parentHeight / 2) - (height/2);
		that.css('padding-top', padAmount);
	});
}
/*===== verticle align center ====*/

/*===== Landig Page Heigt =====*/

function landing_page_height(){
	var header_height = $("header").outerHeight();
	var main_height = $(window).height();
	$(".landing-slider-wrapper").height(main_height-header_height);
}
