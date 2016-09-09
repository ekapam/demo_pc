<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Privacidad extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['titulo'] = "Aviso de Privacidad | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = "privacidad.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('privacidad');
        $this->load->view('footer', $data);
    }

}
