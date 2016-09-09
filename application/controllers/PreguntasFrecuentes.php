<?php defined('BASEPATH') OR exit('No direct script access allowed');

class PreguntasFrecuentes extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['titulo'] = "Preguntas Frecuentes | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = "faq.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('preguntasFrecuentes');
        $this->load->view('footer', $data);
    }
}
