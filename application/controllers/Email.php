<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Email extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data = array(
            'nombre' => 'Dr. Ricardo Omar Ambriz Valdes',
            'email' => 'ekapam@gmail.com',
            'telefono' => '0445511962016',
            'extension' => '0455',
            'mensaje' => 'Que oso!<br>Me da miedo esto, pero YOLO<br><br>--------------<br>Omar Ambriz'
        );
        $this->load->view('email/contacto', $data);
    }

}
