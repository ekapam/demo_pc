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

	var currentYear = new Date().getFullYear();

	function myDateFunction(id, fromModal) {
		$("#" + id + "_modal").modal("show");
	}

	$('#calendario').calendar({

		language: 'es',

		mouseOnDay: function(e) {
			if(e.events.length > 0) {
				var content = '';
				
				for(var i in e.events) {
					content += '<div class="event-tooltip-content">'
									+ '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
									+ '<div class="event-location">' + e.events[i].location + '</div>'
								+ '</div>';
				}
			
				$(e.element).popover({ 
					trigger: 'manual',
					container: 'body',
					html:true,
					content: content
				});
				
				$(e.element).popover('show');
			}
		},

		mouseOutDay: function(e) {
			if(e.events.length > 0) {
				$(e.element).popover('hide');
			}
		},

		clickDay: function(e) {
			return myDateFunction(this.id, false);
		},
		
		dataSource: [
			{
				id: 0,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Ciudad de México',
				startDate: new Date(currentYear, 1, 15),
				endDate: new Date(currentYear, 1, 19)
			},
			{
				id: 1,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Toluca, Edo. de México',
				startDate: new Date(currentYear, 1, 1),
				endDate: new Date(currentYear, 1, 5)
			},
			{
				id: 2,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 1, 8),
				endDate: new Date(currentYear, 1, 12)
			},
			{
				id: 3,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 6, 11),
				endDate: new Date(currentYear, 6, 15)
			},
			{
				id: 4,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 6, 18),
				endDate: new Date(currentYear, 6, 22)
			},
			{
				id: 5,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 6, 25),
				endDate: new Date(currentYear, 6, 29)
			},
			{
				id: 6,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 10, 7),
				endDate: new Date(currentYear, 10, 11)
			},
			{
				id: 7,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 10, 14),
				endDate: new Date(currentYear, 10, 18)
			},
			{
				id: 8,
				name: 'Taller de Integración y Trabajo en Equipo',
				location: 'Puebla, Puebla',
				startDate: new Date(currentYear, 10, 21),
				endDate: new Date(currentYear, 10, 25)
			},
		]
	});

	// $("#date-popover").popover({html: true, trigger: "manual"});
	// $("#date-popover").hide();
	// $("#date-popover").click(function (e) {
	// 	$(this).hide();
	// });
	
	// $("#calendario").zabuto_calendar({
	// 	action: function () {
	// 		return myDateFunction(this.id, false);
	// 	},
	// 	action_nav: function () {
	// 		return myNavFunction(this.id);
	// 	},
	// 	language: "es",
	// 	today: true,
	// 	show_previous: false,
	// 	show_next: 2,
	// 	ajax: {
	// 		url: "servicios/feed?action=1",
	// 		modal: true
	// 	},
	// 	// data: eventData,
	// 	legend: [
	// 		{type: "text", label: "Special event", badge: "00"},
	// 		{type: "block", label: "Regular event"}
	// 	]
	// });

	// function myDateFunction(id, fromModal) {
	// 	$("#date-popover").hide();
	// 	if (fromModal) {
	// 		$("#" + id + "_modal").modal("hide");
	// 	}
	// 	var date = $("#" + id).data("date");
	// 	var hasEvent = $("#" + id).data("hasEvent");
	// 	if (hasEvent && !fromModal) {
	// 		return false;
	// 	}
	// 	$("#date-popover-content").html('You clicked on date ' + date);
	// 	$("#date-popover").show();
	// 	return true;
	// }

	// function myNavFunction(id) {    
	// 	$("#date-popover").hide();
	// 	var nav = $("#" + id).data("navigation");
	// 	var to = $("#" + id).data("to");
	// }

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