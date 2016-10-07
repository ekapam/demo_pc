<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Bolsa extends CI_Controller {

	public $dias;
	public $meses;

	public function __construct() {
		parent::__construct();
		$this->load->model('Bolsa_model');
		$this->dias = $this->config->item('dias');
		$this->meses = $this->config->item('meses');
	}

	public function index() {
		// $this->_example_output((object)array('output' => '' , 'js_files' => array() , 'css_files' => array()));

		$this->load->library('pagination');

		$numVacantes = $this->Bolsa_model->getNumVacantes();

		$config['base_url'] = 'bolsa/index';
		$config['total_rows'] = $numVacantes;
		$config['per_page'] = 10;
		$config['uri_segment'] = 3;
		$config['num_links'] = 3;
		$config["full_tag_open"] = '<ul class="pagination">';
		$config["full_tag_close"] = '</ul>';
		$config["first_link"] = "&laquo;";
		$config["first_tag_open"] = "<li>";
		$config["first_tag_close"] = "</li>";
		$config["last_link"] = "&raquo;";
		$config["last_tag_open"] = "<li>";
		$config["last_tag_close"] = "</li>";
		$config['next_link'] = '&gt;';
		$config['next_tag_open'] = '<li>';
		$config['next_tag_close'] = '<li>';
		$config['prev_link'] = '&lt;';
		$config['prev_tag_open'] = '<li>';
		$config['prev_tag_close'] = '<li>';
		$config['cur_tag_open'] = '<li class="active"><a href="#">';
		$config['cur_tag_close'] = '</a></li>';
		$config['num_tag_open'] = '<li>';
		$config['num_tag_close'] = '</li>';
		
		$this->pagination->initialize($config);
		
		$paginacion = $this->pagination->create_links();

		$data['titulo'] = "Bolsa de Trabajo | People Connection | Soluciones en Recursos Humanos";
		$data['menu'] = $this->load->view('menu', NULL, TRUE);
		$data['banner'] = $this->load->view('bolsa/banner', NULL, TRUE);
		$data['js'] = 'bolsa.js';
		
		$vacantes = $this->Bolsa_model->Vacantes();
		// print_r($vacantes);

		// $data['chat'] = $this->load->view('chat', $data, TRUE);

		if (!$this->input->is_ajax_request()) $this->load->view('header', $data);
		if (!$this->input->is_ajax_request()) $this->load->view('menu');
		if (!$this->input->is_ajax_request()) $this->load->view('bolsa/banner');
		$this->load->view('bolsa/bolsa', compact('vacantes','paginacion'));
		if (!$this->input->is_ajax_request()) $this->load->view('footer', $data);

	}

	public function vacante($id = NULL) {
		$id = $this->uri->segment(3);

		// if ($id != "") {
			$resultado = $this->Bolsa_model->getVacante($id);
			print_r($resultado);
		// 	if ($resultado != false) {
		// 		if($resultado[0]->vcnt_status==TRUE){
		// 			// print_r($resultado[0]->vcnt_status);
					$data['vacante'] = $resultado;
		// 		}
		// 		else{
		// 			header("HTTP/1.1 404 Not Found");
		// 			redirect('bolsa-de-trabajo','refresh');
		// 		}
		// 	}
		// 	else {
		// 		header("HTTP/1.1 404 Not Found");
		// 	    redirect('bolsa-de-trabajo','refresh');
		// 	}
		// }

		$titulo = $data['vacante'][0]->vcnt_titulo;

		$data['titulo'] = $titulo . " | People Connection | Soluciones en Recursos Humanos";
		$data['js'] = 'bolsa.js';
		$data['dias'] = $this->dias;
		$data['meses'] = $this->meses;
		// $data['chat'] = $this->load->view('chat', $data, TRUE);
		
		$this->load->view('header', $data);
		$this->load->view('menu', $data);
		$this->load->view('bolsa/vacante', $data);
		$this->load->view('footer', $data);
	}

}
