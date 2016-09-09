<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Eventos extends CI_Controller {

	public function index() {
		$this->load->view("add_event");
	}

	public function save() {
		$this->form_validation->set_rules('from', 'Desde', 'trim|required|xss_clean');
        $this->form_validation->set_rules('to', 'Hasta', 'trim|required|xss_clean');
		$this->form_validation->set_rules('url', 'Url', 'trim|xss_clean');
        $this->form_validation->set_rules('title', 'Título', 'trim|required|xss_clean');
        $this->form_validation->set_rules('event', 'Evento', 'trim|required|xss_clean');
        $this->form_validation->set_rules('class', 'Tipo de evento', 'trim|required|xss_clean');

        $this->form_validation->set_message('required', 'El  %s es requerido');

        if($this->form_validation->run() == FALSE) {
            $this->index();
        }

        else {
        	$this->load->model("eventos_model");
        	$this->eventos_model->add();
        	redirect("eventos",'refresh');
        }
	}

	public function getAll() {
		if($this->input->is_ajax_request()) {
			$this->load->model('eventos_model');
			$events = $this->eventos_model->getAll();
			echo json_encode(
				array(
					"success" => 1,
					"result" => $events
				)
			);
		}
	}
}


/* End of file events.php */
/* Location: ./application/controllers/events.php */
