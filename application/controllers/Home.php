<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home extends CI_Controller {

	public $dias;
	public $meses;

	function __construct() {
		parent::__construct();
		$this->load->model('Home_model');
		$this->dias = $this->config->item('dias');
		$this->meses = $this->config->item('meses');
	}
	
	function index() {

		// if($this->session == TRUE){
		//     $data['titulo'] = strftime("%A, %d-%B-%Y",time());
		// }
		// else {
		//     $data['titulo'] = "People";
		// }
		
		$data['vacantes'] = $this->Home_model->getVacantes();
		// $dos = $this->Home_model->getVacantes();
		// print_r($dos);

		$data['titulo'] = "People Connection | Soluciones en Recursos Humanos";

		$cual = rand(1, 6);
		$data['slide_random'] = $this->load->view('slides/slide0'.$cual, '', TRUE);
		$data['dias'] = $this->dias;
		$data['meses'] = $this->meses;

		$data['no'] = $cual;

		$data['js'] = "home.js";
		// $data['chat'] = $this->load->view('chat', $data, TRUE);
		$this->load->view('header', $data);
		$this->load->view('menu');
		$this->load->view('home', $data);
		$this->load->view('footer', $data);
	}

}

