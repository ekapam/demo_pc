new WOW().init();

function checkWidth() {
    var width = window.innerWidth;
    if (width >= 1024) {
        $('#menu-cabeza').removeClass('container-fluid');
        $('#menu-cabeza').addClass('container');
        $('h3').addClass('text-right');
        $('h3').removeClass('text-center');
    }
    else {
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
        $('h3').addClass('text-center');
        $('h3').removeClass('text-right');
    }
}

$(document).ready(function() {
    
    $('li.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeIn(500);
        },
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeOut(500);
        }
    );

    var width = window.innerWidth;
	
	if (width >= 1024) {
        $('h3').addClass('text-right');
        $('h3').removeClass('text-center');
    }
    else {
        $('h3').addClass('text-center');
        $('h3').removeClass('text-right');
    }

});