<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|	$route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples:	my-controller/index	-> my_controller/index
|		my-controller/my-method	-> my_controller/my_method
*/
$route['default_controller'] = 'Home';
// $route['404_override'] = '';
$route['404_override'] = 'Mi404';
$route['translate_uri_dashes'] = FALSE;

// Rutas Servicios
$route['servicios/administracion-de-personal'] = 'servicios/admon_personal';
// $route['servicios/administracion/maquila-de-nomina'] = 'servicios/maquila';
// $route['servicios/administracion/contratacion-a-prueba'] = 'servicios/contratacionPrueba';
// $route['servicios/administracion/tercerizacion-de-personal'] = 'servicios/tercerizacion';

$route['servicios/busqueda-de-talento'] = 'servicios/busqueda';
// $route['servicios/reclutamiento-y-seleccion'] = 'servicios/reclutamiento';
// $route['servicios/reclutamiento/headhunting'] = 'servicios/headhunting';
// $route['servicios/reclutamiento/pruebas-de-psicometria'] = 'servicios/psicometria';
// $route['servicios/reclutamiento/estudios-socioeconomicos'] = 'servicios/socioeconomicos';
// $route['servicios/reclutamiento/pruebas-de-deshonestidad'] = 'servicios/deshonestidad';

$route['servicios/software-de-nomina'] = 'servicios/software';

// $route['servicios/juridicos/integracion-profesional-de-expedientes'] = 'servicios/integracionProfesional';
// $route['servicios/juridicos/contratacion-profesional-de-colaboradores'] = 'servicios/contratacionProfesional';
// $route['servicios/juridicos/baja-profesional-de-colaboradores'] = 'servicios/bajaProfesional';


// Rutas Boletin
$route['boletin/2016'] = 'boletin';
$route['boletin/2016/enero'] = 'boletin/dosmil_16_01';
$route['boletin/2016/febrero'] = 'boletin/dosmil_16_02';
$route['boletin/2016/marzo'] = 'boletin/dosmil_16_03';
$route['boletin/2016/abril'] = 'boletin/dosmil_16_04';

// Preguntas Frecuentes
$route['preguntas-frecuentes'] = 'PreguntasFrecuentes';

// Bolsa de Trabajo
$route['bolsa/vacante'] = 'bolsa';
$route['bolsa-de-trabajo'] = 'bolsa';
$route['bolsa-de-trabajo/vacante'] = 'bolsa';
$route['bolsa-de-trabajo/vacante/:num'] = 'bolsa/vacante/$1';

// Privacidad
$route['aviso-de-privacidad'] = 'privacidad';

// Mapa de Sitio
$route['mapa-de-sitio'] = 'mapa';