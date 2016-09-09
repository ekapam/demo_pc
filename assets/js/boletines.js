new WOW().init();

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
    $('#btn-2016').toggleClass('btn-primary');
    
    $('#btn-2015').click(function(event){
        if( $('#btn-2015').hasClass('btn-primary') ) { $('#btn-2016,#btn-2017').removeClass('btn-primary'); }
        else { /*$('#contenido').addClass('animated fadeOutDown');*/ $('#btn-2015').toggleClass('btn-primary'); $('#btn-2016,#btn-2017').removeClass('btn-primary'); }
        
        // setTimeout(function() {
        //     $('#contenido').replaceWith($('#mision').html());
        //     $('#inner-mision').wrap('<div class="jumbotron" id="contenido"></div>');
        //     $('#contenido').addClass('animated fadeInUp');
        // },200);
    });
    
    $('#btn-2016').click(function(event){
        if( $('#btn-2016').hasClass('btn-primary') ) { $('#btn-2015,#btn-2017').removeClass('btn-primary'); }
        else { /*$('#contenido').addClass('animated fadeOutDown');*/ $('#btn-2016').toggleClass('btn-primary'); $('#btn-2015,#btn-2017').removeClass('btn-primary'); }
        
        // setTimeout(function(){
        //     $('#contenido').replaceWith($('#vision').html());
        //     $('#inner-vision').wrap('<div class="jumbotron" id="contenido"></div>');
        //     $('#contenido').addClass('animated fadeInUp');
        // },200);
    });
    
    $('#btn-2017').click(function(event){
        if( $('#btn-2017').hasClass('btn-primary') ) { $('#btn-2015,#btn-2016').removeClass('btn-primary'); }
        else { /*$('#contenido').addClass('animated fadeOutDown');*/ $('#btn-2017').toggleClass('btn-primary'); $('#btn-2015,#btn-2016').removeClass('btn-primary'); }
        
        // setTimeout(function(){
        //     $('#contenido').replaceWith($('#valores').html());
        //     $('#inner-valores').wrap('<div class="jumbotron" id="contenido"></div>');
        //     $('#contenido').addClass('animated fadeInUp');
        // },200);
    });
});