// new WOW().init();

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
		$('#menu-cabeza').removeClass('container-fluid');
		$('#menu-cabeza').addClass('container');
	}
	else {
		$('#menu-cabeza').removeClass('container');
		$('#menu-cabeza').addClass('container-fluid');
	}

	$('#formuContacto').validate({
		debug: true,
		ignore: ".ignore",
		rules: {
			nombre: {
				minlength: 2,
				required: true
			},
			email: {
				required: true,
				email: true
			},
			telefono: {
				minlength: 2,
				required: true
			},
			"g-recaptcha-response": {
				required: function() {
					if(grecaptcha.getResponse() == '') {
						return true;
					}
					else {
						return false;
					}
				}
			}
		},
		submitHandler: function(form) {

			$('#formuContacto').ajaxSubmit({
				type: "POST",
				data : $('#formuContacto').serialize(),
				url : 'formucontacto/index'
			})
		}
	});  
});

$.extend( $.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, rellena este campo.",
	email: "Por favor, escribe una dirección de correo válida.",
	url: "Por favor, escribe una URL válida.",
	date: "Por favor, escribe una fecha válida.",
	dateISO: "Por favor, escribe una fecha (ISO) válida.",
	number: "Por favor, escribe un número válido.",
	digits: "Por favor, escribe sólo dígitos.",
	creditcard: "Por favor, escribe un número de tarjeta válido.",
	equalTo: "Por favor, escribe el mismo valor de nuevo.",
	extension: "Por favor, escribe un valor con una extensión aceptada.",
	maxlength: $.validator.format( "Por favor, no escribas más de {0} caracteres." ),
	minlength: $.validator.format( "Por favor, no escribas menos de {0} caracteres." ),
	rangelength: $.validator.format( "Por favor, escribe un valor entre {0} y {1} caracteres." ),
	range: $.validator.format( "Por favor, escribe un valor entre {0} y {1}." ),
	max: $.validator.format( "Por favor, escribe un valor menor o igual a {0}." ),
	min: $.validator.format( "Por favor, escribe un valor mayor o igual a {0}." ),
	nifES: "Por favor, escribe un NIF válido.",
	nieES: "Por favor, escribe un NIE válido.",
	cifES: "Por favor, escribe un CIF válido."
} );