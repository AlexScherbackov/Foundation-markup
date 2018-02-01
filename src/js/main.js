svg4everybody();

// @include('detect.js')
// @include('globals.js')


$(document).ready(function(){
	$('#mobile-menu-btn').click(function(){
		$(this).toggleClass('open');
		$('#mobile-menu').toggleClass('open');
	});
});
