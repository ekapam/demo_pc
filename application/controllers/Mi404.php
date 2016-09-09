<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Mi404 extends CI_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index() {
        $this->output->set_status_header('404');
        $data['content'] = 'error_404';
        $data['titulo'] = "Error 404 | People Connection";
        $data["js"] = "home.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);

        if(isset($this->session->userdata['candidato'])) {
            $this->load->view('candidato/header', $data);
            $this->load->view('candidato/menu', $data);
            $this->load->view('404', $data);
            $this->load->view('candidato/footer', $data);
        }

        if(isset($this->session->userdata['gestor'])) {
            $this->load->view('gestor/header', $data);
            $this->load->view('gestor/menu', $data);
            $this->load->view('404', $data);
            $this->load->view('gestor/footer', $data);
        }

        else {
            $this->load->view('header', $data);
            $this->load->view('menu');
            $this->load->view('404', $data);
            $this->load->view('footer',$data);
        }
    }

}
