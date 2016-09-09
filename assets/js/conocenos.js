new WOW().init();

function checkWidth() {
    var width = window.innerWidth;
    if (width >= 1024) {
        $("div#btn-conocenos > button").addClass('btn-lg');
        $('#menu-cabeza').removeClass('container-fluid');
        $('#menu-cabeza').addClass('container');
    } else {
        $("div#btn-conocenos > button").removeClass('btn-lg');
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
    }
}

$(document).ready(function(){
    
    $('li.dropdown').hover(
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeIn(500);
        },
        function() {
            $(this).find('.dropdown-menu').stop(true, true).delay(20).fadeOut(500);
        }
    );

    // cache the window object
    $window = $(window);

    $('section[data-type="background"]').each(function(){
        // declare the variable to affect the defined data-type
        var $scroll = $(this);

        $(window).scroll(function() {
            // HTML5 proves useful for helping with creating JS functions!
            // also, negative value because we're scrolling upwards                            
            var yPos = -($window.scrollTop() / $scroll.data('speed'));

            // background position
            var coords = '50% '+ yPos + 'px';

            // move the background
            $scroll.css({ backgroundPosition: coords });   
        }); // end window scroll
    });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");
