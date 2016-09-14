<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Mi404 extends CI_Controller {

	public function __construct() {
		parent::__construct();
	}

	public function index() {
		$this->output->set_status_header('404');
		$data['titulo'] = "Error 404 | People Connection";
		$data["js"] = "home.js";
		// $data['chat'] = $this->load->view('chat', $data, TRUE);

		if(isset($this->session->userdata['cnd_id'])) {
			$this->load->view('candidato/header',$data);
			$this->load->view('candidato/menu');
			$this->load->view('404');
			$this->load->view('candidato/footer',$data);
		}

		elseif(isset($this->session->userdata['gstr_id'])) {
			$this->load->view('gestion/header',$data);
			$this->load->view('gestion/menu');
			$this->load->view('404');
			$this->load->view('gestion/footer',$data);
		}

		else {
			$this->load->view('header',$data);
			$this->load->view('menu');
			$this->load->view('404');
			$this->load->view('footer',$data);
		}
	}

}
