<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Conocenos extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['titulo'] = "Conócenos | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = "conocenos.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('conocenos');
        $this->load->view('footer', $data);
    }

}
