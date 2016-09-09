new WOW().init();

function checkWidth() {
    var width = window.innerWidth;
    if (width >= 1024) {
        $('#menu-cabeza').removeClass('container-fluid');
        $('#menu-cabeza').addClass('container');
        $('#contactoMapa').addClass('img-responsive');
    }
    else {
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
        $('#contactoMapa').removeClass('img-responsive');
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
        $('#contactoMapa').addClass('img-responsive');
    }
    else {
        $('#menu-cabeza').removeClass('container');
        $('#menu-cabeza').addClass('container-fluid');
        $('#contactoMapa').removeClass('img-responsive');
    }

    $('#contacto').validate({
        // debug: true,
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
                number: true,
                minlength: 2,
                required: true
            },
            extension: {
                number: true
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
            $("#contacto").ajaxSubmit({
                type: "POST",
                data : $('#contacto').serialize(),
                url : 'contacto/mandar'
            });
        },
        error: function() {
            alert("error");
        }
    });
});

$.extend($.validator.messages, {
    required: "Este campo es obligatorio.",
    remote: "Por favor, rellena este campo.",
    email: "Por favor, escribe una dirección de correo válida.",
    url: "Por favor, escribe una URL válida.",
    date: "Por favor, escribe una fecha válida.",
    dateISO: "Por favor, escribe una fecha (ISO) válida.",
    number: "Por favor, escribe un número válido, sin espacios o guiones.",
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
});

var regions=[
{
    "region_name":"Aguascalientes, Aguascalientes",
    "region_code":"aguascalientes",
    "direccion":"González Saracho 309, Zona Centro, CP 20000",
    "telefonos":"01 (449) 915 8851",
    "latitud":"21.8840926",
    "longitud":"-102.2913491"
},
{
    "region_name":"Tijuana, Baja California",
    "region_code":"bc-norte",
    "direccion":"Porfirio Díaz 8213, Juárez, CP 22040",
    "telefonos":"01 (664) 684 7487",
    "latitud":"32.515007",
    "longitud":"-117.035173"
},
{
    "region_name":"La Paz, Baja California Sur",
    "region_code":"bc-sur",
    "direccion":"Antonio Navarro 1625, Los Olivos, CP 23040",
    "telefonos":"01 (612) 122 0788",
    "latitud":"24.141108",
    "longitud":"-110.309501"
},
{
    "region_name":"Ciudad del Carmen, Campeche",
    "region_code":"campeche",
    "direccion":"Avenida Concordia 8, Fovissste, CP 24199",
    "telefonos":"01 (938) 382 7075",
    "latitud":"18.6505592",
    "longitud":"-91.8102278"
},
{
    "region_name":"San Cristobal de la Casas, Chiapas",
    "region_code":"chiapas",
    "direccion":"Julio M. Corzo 3, Sta Lucia, CP 29250",
    "telefonos":"01 (967) 674 5537",
    "latitud":"16.7331693",
    "longitud":"-92.6348964"
},
{
    "region_name":"Ciudad Cuahutemoc, Chihuahua",
    "region_code":"chihuahua",
    "direccion":"Agustín Melgar, 124, Cuauhtémoc Centro, CP 31500",
    "telefonos":"01 (625) 581 4240",
    "latitud":"28.4062855",
    "longitud":"-106.8665093"
},
{
    "region_name": "Corporativo CDMX",
    "region_code": "ciudad-de-mexico",
    "direccion":"Blvd. Adolfo López Mateos No. 2675, Entrada peatonal en Querétaro No. 16, Col. Progreso, Del. Álvaro Obregón, C.P. 01080",
    "telefonos": "(55) 5683-2400",
    "latitud":"19.3403342",
    "longitud":"-99.2035818"
},
{
    "region_name":"Torreón, Coahuila",
    "region_code":"coahuila",
    "direccion":"Luis Echeverría Álvarez 231, Residencial Cumbres, CP 25270",
    "telefonos":"01 (844) 416 3963",
    "latitud":"25.5410428",
    "longitud":"-103.4093223"
},
{
    "region_name":"Manzanillo, Colima",
    "region_code":"colima",
    "direccion":"Gustavo Díaz Ordaz 20, Salagua, CP 28869",
    "telefonos":"01 (314) 333 1305",
    "latitud":"19.113599",
    "longitud":"-104.3394381"
},
{
    "region_name":"Durango, Durango",
    "region_code":"durango",
    "direccion":"Prol. Pino Suárez 801, Burócrata, CP 34279",
    "telefonos":"01 (618) 817 0330",
    "latitud":"24.0256787",
    "longitud":"-104.6539807"
},
{
    "region_name":"León, Guanajuato",
    "region_code":"guanajuato",
    "direccion":"Av B.Domínguez Pte 518, Centro, CP 37000",
    "telefonos":"01 (477) 147 3837",
    "latitud":"21.1224169",
    "longitud":"-101.6870733"
},
{
    "region_name":"Chilpancingo, Guerrero",
    "region_code":"guerrero",
    "direccion":"Av. Álvarez Sur 31, Centro, CP 39000",
    "telefonos":"01 (747) 478 4204",
    "latitud":"17.5492308",
    "longitud":"-99.4997627"
},
{
    "region_name":"Pachuca, Hidalgo",
    "region_code":"hidalgo",
    "direccion":"Saratustra 103, Amp. Santa Julia 3ra. Secc, CP 42080",
    "telefonos":"01 (771) 710 3087",
    "latitud":"20.1004958",
    "longitud":"-98.7647736"
},
{
    "region_name": "Guadalajara, Jalisco",
    "region_code": "jalisco",
    "direccion":"Av. Corona 126, Centro, Zona Centro, CP 44100",
    "telefonos": "01 (33) 3613 1315",
    "latitud":"20.6747119",
    "longitud":"-103.3466755"
},
{
    "region_name": "Morelia, Michoacán",
    "region_code": "michoacan",
    "direccion":"El Nigromante 132 A, Centro, CP 58000",
    "telefonos": "01 (443) 444 3586 y 01 (443) 444 2544",
    "latitud":"19.703565",
    "longitud":"-101.2018373"
},
{
    "region_name":"Cuautla, Morelos",
    "region_code":"morelos",
    "direccion":"Larios 4, Centro, CP 62740",
    "telefonos":"01 (735) 352 0663",
    "latitud":"18.8154509",
    "longitud":"-98.9489347"
},
{
    "region_name": "Toluca, Estado de México",
    "region_code": "estado-de-mexico",
    "direccion":"Av. Tecnológico 800, Local 4, Col. La Asunción, Metepec, CP. 52172",
    "telefonos": "(722) 271 4500 y (722) 271 0410",
    "latitud":"19.278826",
    "longitud":"-99.574693"
},
{
    "region_name":"Tepic, Nayarit",
    "region_code":"nayarit",
    "direccion":"Calle 12 de Octubre 488, Caja de Agua, CP 63158",
    "telefonos":"01 (311) 133 4031",
    "latitud":"21.4997985",
    "longitud":"-104.8934642"
},
{
    "region_name":"Monterrey, Nuevo León",
    "region_code":"nuevo-leon",
    "direccion":"Isaac Garza 1645, Centro, CP 64000 ",
    "telefonos":"01 (81) 8372 3010",
    "latitud":"25.6819873",
    "longitud":"-100.3287455"
},
{
    "region_name":"Oaxaca, Oaxaca",
    "region_code":"oaxaca",
    "direccion":"Rayon 303, Centro, CP 68000",
    "telefonos":"01 (951) 514 1683",
    "latitud":"17.0577542",
    "longitud":"-96.7234487"
},
{
    "region_name": "San Andrés Cholula, Puebla",
    "region_code": "puebla",
    "direccion":"Blvd. Atlixcayotl 5210, Torre JV3 PB, Local F1 y F2, Col. San Bernardino Tlaxcalanzingo, CP. 72810",
    "telefonos": "(222) 431 0124 / 431 0128",
    "latitud":"19.009419",
    "longitud":"-98.265225"
},
{
    "region_name":"Querétaro, Querétaro",
    "region_code":"queretaro",
    "direccion":"Av Constituyentes 13, CP 76000",
    "telefonos":"01 (442) 212 3411",
    "latitud":"20.5852641",
    "longitud":"-100.3905932"
},
{
    "region_name":"Cancún, Quintana Roo",
    "region_code":"quintana-roo",
    "direccion":"Cancun-Kantunil, 94, CP 77517",
    "telefonos":"01 (998) 241 5265",
    "latitud":"21.1558293",
    "longitud":"-86.86448"
},
{
    "region_name":"San Luis Potosi, San Luis Potosi",
    "region_code":"san-luis-potosi",
    "direccion":"Alhóndiga 28, Centro, CP 78000",
    "telefonos":"01 (444) 814 4785",
    "latitud":"22.1558827",
    "longitud":"-100.9761194"
},
{
    "region_name":"Culiacán, Sinaloa",
    "region_code":"sinaloa",
    "direccion":"Cristobal Colón 33 Oriente, Primer Cuadro Centro, CP 80000",
    "telefonos":"01 (667) 713 6163",
    "latitud":"24.8056549",
    "longitud":"-107.3940678"
},
{
    "region_name":"Hermosillo, Sonora",
    "region_code":"sonora",
    "direccion":"Reforma 273, Proyecto Río Sonora, CP 83280",
    "telefonos":"01 (662) 212 1097",
    "latitud":"29.0720891",
    "longitud":"-110.9645565"
},
{
    "region_name":"Villahermosa, Tabasco",
    "region_code":"tabasco",
    "direccion":"Av. 27 de Febrero No.1801, Atasta de Serra, CP 86100",
    "telefonos":"01 (993) 315 0486",
    "latitud":"17.9837988",
    "longitud":"-92.9445444"
},
{
    "region_name":"Reynosa, Tamaulipas",
    "region_code":"tamaulipas",
    "direccion":"Callejon Revolucion 100, Presa la Laguna, CP 88750",
    "telefonos":"01 (899) 926 0274",
    "latitud":"26.0510131",
    "longitud":"-98.2990462"
},
{
    "region_name":"Tlaxcala, Tlaxcala",
    "region_code":"tlaxcala",
    "direccion":"Portal Hidalgo 4, Tlaxcala de Xicohtencatl, Centro, CP 90000",
    "telefonos":"01 (246) 462 6015",
    "latitud":"19.3163348",
    "longitud":"-98.2378635"
},
{
    "region_name":"Orizaba, Veracruz",
    "region_code":"veracruz",
    "direccion":"Norte 10 44, Centro, CP 94300",
    "telefonos":"01 (272) 724 2688",
    "latitud":"18.8498214",
    "longitud":"-97.1011523"
},
{
    "region_name":"Merida, Yucatan",
    "region_code":"yucatan",
    "direccion":"Calle 55, Pacabtún, CP 97160",
    "telefonos":"01 (999) 982 1590",
    "latitud":"20.9701216",
    "longitud":"-89.5837606"
},
{
    "region_name":"Zacatecas, Zacatecas",
    "region_code":"zacatecas",
    "direccion":"Mina S. Felipe 139, Minera, CP 98050",
    "telefonos":"01 (492) 924 2251",
    "latitud":"22.7712167",
    "longitud":"-102.5856033"
},
{
    "region_code":"cozumel"
}
];

function initMap() {

    var sucursales = {lat: 19.3403342, lng: -99.2035818};
    var image = 'assets/img/job-mark.png';

    var map = new google.maps.Map(document.getElementById('map-sucursales'), {
        center: sucursales, 
        zoom: 15,
        mapTypeControl: false,
        styles: [
            {"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#006495"}]},
            {"featureType": "landscape","elementType": "all","stylers": [{"color": "#f2f2f2"}]},
            {"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"},{"hue": "#006495"}]},
            {"featureType": "road","elementType": "all","stylers": [{"saturation": -100},{"lightness": 45}]},
            {"featureType": "road.highway","elementType": "all","stylers": [{"visibility": "simplified"}]},
            {"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#90cff7"}]},
            {"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#005d95"}]},
            {"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"},{"weight": "3.00"}]},
            {"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#dbf1ff"}]},
            {"featureType": "road.arterial","elementType": "labels.text.fill","stylers": [{"color": "#006cad"}]},
            {"featureType": "road.arterial","elementType": "labels.icon","stylers": [{"visibility": "off"}]},
            {"featureType": "road.local","elementType": "labels.text.fill","stylers": [{"color": "#658da5"}]},
            {"featureType": "water","elementType": "all","stylers": [{"color": "#006495"}]}
        ]
    });

    var marker = new google.maps.Marker({
        position: sucursales,
        map: map,
        icon: image,
        title: 'Sucursales'
    });

    for(i = 0; i < regions.length; i++) {
        $('#'+ regions[i].region_code).data('region', regions[i]);
    }

    $('path').mouseover(function (e) {
        var region_data=$(this).data('region');
        if (region_data.region_code !== "cozumel") {
            $('<div class="info_panel">' +
                '<h5>' + region_data.region_name + '</h5>' +
                '<span>Dirección</span>: ' + region_data.direccion + '<br>' +
                '<span>Teléfonos</span>: ' + region_data.telefonos +
                '</div>'
            )
            .appendTo('body');
        }
    })
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function(e) {
        var mouseX = e.pageX,
            mouseY = e.pageY;

        $('.info_panel').css({
            top: mouseY+20,
            left: mouseX - ($('.info_panel').width()/2)
        });
    })
    .click(function(e){
        var region_data = $(this).data('region');
        if (region_data.region_code !== "cozumel") {
            map.setCenter(new google.maps.LatLng(region_data.latitud, region_data.longitud));
            myLatlng = new google.maps.LatLng(region_data.latitud,region_data.longitud);
            marker.setPosition(myLatlng);
            map.setZoom(15);
            $("h2#ciudad").text(region_data.region_name);
            $("span#direccion").text(region_data.direccion);
            $("span#telefonos").text(region_data.telefonos);
            $('html, body').animate({ scrollTop: $("#container").offset().top - 100 }, 1000);
        }
        else {
            if (e.ctrlKey == true) {
                alert("Visita Cozumel");
            };
        }
    });
}