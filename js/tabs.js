(function($) {
$(function() {

	$('div.main-service_block2_bot').on('click', '.main-service_block2_bot_bon:not(.tivvvv)', function() {
		$(this)
			.addClass('tivvvv').siblings().removeClass('tivvvv')
			.closest('div.main-service_block2').find('div.main-service_block2_box').removeClass('mainActiv').eq($(this).index()).addClass('mainActiv');
	});

});
})(jQuery);