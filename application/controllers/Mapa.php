<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Mapa extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['titulo'] = "Mapa de Sitio | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = "mapa.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('mapa');
        $this->load->view('footer', $data);
    }

}
