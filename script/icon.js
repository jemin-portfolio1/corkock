$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top_button').fadeIn();
    } else {
        $('.top_button').fadeOut();
    }
});

$( '.top_button' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 1000 );
	return false;
} );

