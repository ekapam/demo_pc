function checkWidth() {
    var width = window.innerWidth;
	
	if (width >= 1024) {
        $('#menu-cabeza').removeClass('container-fluid');
        $('#menu-cabeza').addClass('container');
    }
    else {
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
    }
}


$(document).ready(function() {
    var width = window.innerWidth;
	
	if (width >= 1024) {
        $('#menu-cabeza').removeClass('container-fluid');
        $('#menu-cabeza').addClass('container');
    }
    else {
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
    }
});