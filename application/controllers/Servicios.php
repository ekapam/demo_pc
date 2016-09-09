<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Servicios extends CI_Controller {

    public $dias;
    public $meses;

    function __construct() {
        parent::__construct();
        $this->dias = $this->config->item('dias');
        $this->meses = $this->config->item('meses');
    }

    function index() {
        $data['titulo'] = "Servicios | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = 'servicios.js';
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('servicios/servicios');
        $this->load->view('footer',$data);
    }

    function admon_personal() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['color'] = "warning";
        $data['titulo'] = "Administración de Personal | People Connection | Soluciones en Recursos Humanos";
        $data['contacto'] = $this->load->view('formulario/formulario', $data, TRUE);
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $data['codigo'] = 'admon';
        $data['js'] = 'servicio.js';
        $data['validate'] = TRUE;
        $data['form'] = TRUE;
        $this->load->view('header',$data);
        $this->load->view('menu');
        $this->load->view('servicios/servicio',$data);
        $this->load->view('footer',$data);
    }

    function busqueda() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['color'] = "success";
        $data['titulo'] = "Búsqueda de Talento | People Connection | Soluciones en Recursos Humanos";
        $data['contacto'] = $this->load->view('formulario/formulario', $data, TRUE);
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $data['codigo'] = "busqueda";
        $data['js'] = 'servicio.js';
        $data['validate'] = TRUE;
        $data['form'] = TRUE;
        $this->load->view('header',$data);
        $this->load->view('menu');
        $this->load->view('servicios/servicio',$data);
        $this->load->view('footer',$data);
    }

    function capacitacion() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['color'] = "primary";
        $data['titulo'] = "Capacitación | People Connection | Soluciones en Recursos Humanos";
        $data['contacto'] = $this->load->view('formulario/formulario', $data, TRUE);
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $data['codigo'] = "capacitacion";
        $data['js'] = 'servicio.js';
        $data['validate'] = TRUE;
        $data['form'] = TRUE;
        $data['calendario'] = TRUE;
        $this->load->view('header',$data);
        $this->load->view('menu');
        $this->load->view('servicios/servicio',$data);
        $this->load->view('footer',$data);
    }

    function feed() {
        // if (!empty($_REQUEST['year']) && !empty($_REQUEST['month'])) {
            // $year = intval($_REQUEST['year']);
            $year = date('Y');
            // $month = intval($_REQUEST['month']);
            $month = date('m');
            $lastday = intval(strftime('%d', mktime(0, 0, 0, ($month == 12 ? 1 : $month + 1), 0, ($month == 12 ? $year + 1 : $year))));

            $dates = array();
            $dias  = $this->config->item('dias');
            $meses = $this->config->item('meses');
            for ($i = 0; $i <= (rand(4, 10)); $i++) {
                $date = $year . '-' . str_pad($month, 2, '0', STR_PAD_LEFT) . '-' . str_pad(rand(1, $lastday), 2, '0', STR_PAD_LEFT);
                $fecha = $dias[date('w',strtotime($date))].", ".date('d',strtotime($date))." / ".$meses[date('n',strtotime($date))]." / ".date('Y',strtotime($date));
                
                $dates[$i] = array(
                    'date' => $date,
                    // 'badge' => ($i & 1) ? true : false,
                    'title' => 'Example for ' . $fecha,
                    'body' => '<p class="lead">Information for this date</p><p>You can add <strong>html</strong> in this block</p>',
                    'footer' => 'Extra information',
                );

                if (!empty($_REQUEST['grade'])) {
                    $dates[$i]['badge'] = false;
                    $dates[$i]['classname'] = 'grade-' . rand(1, 4);
                }

                // if (!empty($_REQUEST['action'])) {
                    $dates[$i]['title'] = 'Taller de Integración y Trabajo en Equipo';
                    $dates[$i]['body'] = '<p>The footer of this modal window consists of two buttons. One button to close the modal window without further action.</p>';
                    $dates[$i]['body'] .= '<p>The other button [Go ahead!] fires myFunction(). The content for the footer was obtained with the AJAX request.</p>';
                    $dates[$i]['body'] .= '<p>The ID needed for the function can be retrieved with jQuery: <code>dateId = $(this).closest(\'.modal\').attr(\'dateId\');</code></p>';
                    $dates[$i]['body'] .= '<p>The second argument is true in this case, so the function can handle closing the modal window: <code>myFunction(dateId, true);</code></p>';
                    // $dates[$i]['footer'] = '
                    // <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    // <button type="button" class="btn btn-primary" onclick="dateId = $(this).closest(\'.modal\').attr(\'dateId\'); myDateFunction(dateId, true);">Go ahead!</button>
                    // ';
                    $dates[$i]['footer'] = '
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" onclick="alert(\'alertame esta\');">Go ahead!</button>
                    ';
                // }
            }

            echo json_encode($dates);
            // print_r($dates);

        // }

        // else {
        //     echo json_encode(array());
        // }
    }

    function software() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['color'] = "danger";
        $data['titulo'] = "Software de Nómina | People Connection | Soluciones en Recursos Humanos";
        $data['contacto'] = $this->load->view('formulario/formulario', $data, TRUE);
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $data['codigo'] = "software";
        $data['js'] = 'servicio.js';
        $data['validate'] = TRUE;
        $data['form'] = TRUE;
        $this->load->view('header',$data);
        $this->load->view('menu');
        $this->load->view('servicios/servicio',$data);
        $this->load->view('footer',$data);
    }

    function juridicos() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['color'] = "purple";
        $data['titulo'] = "Servicios Jurídicos | People Connection | Soluciones en Recursos Humanos";
        $data['contacto'] = $this->load->view('formulario/formulario', $data, TRUE);
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $data['codigo'] = "juridicos";
        $data['js'] = 'servicio.js';
        $data['validate'] = TRUE;
        $data['form'] = TRUE;
        $this->load->view('header',$data);
        $this->load->view('menu');
        $this->load->view('servicios/servicio',$data);
        $this->load->view('footer',$data);
    }
    
}
