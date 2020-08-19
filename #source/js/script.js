$(document).ready(function() {
	$('.menu-header__icon').click(function(event) {
		$('.menu-header__icon,.menu-header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});