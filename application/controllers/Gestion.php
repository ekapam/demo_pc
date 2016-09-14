<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gestion extends CI_Controller {
		
	public $gestor_status;

	function __construct() {
		parent::__construct();
		$this->load->model('Gestion_model', 'gestion_model', TRUE);
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->status = $this->config->item('gestor_status');
	}

	public function index() {
		if (empty($this->session->userdata['gstr_email'])) {
			redirect(site_url().'gestion/acceso/');
		}
		$data = $this->session->userdata;
		$crud = new grocery_CRUD();
		$this->load->library('gc_dependent_select');
		$crud->set_table('vacantes');
		$crud->set_subject('Vacante');
		$crud->unset_delete();
		$crud->unset_read();
		$crud->order_by('vcnt_id','desc');
		$crud->display_as(array('vcnt_id'=>'ID','vcnt_status'=>'Estatus','vcnt_fecha'=>'Fecha y Hora','vcnt_sueldo'=>'Sueldo','vcnt_estado'=>'Estado','vcnt_ciudad'=>'Ciudad / Localidad','vcnt_categoria'=>'Categoria','vcnt_jornada'=>'Jornada','vcnt_cantidad'=>'Cantidad de Vacantes','vcnt_titulo'=>'Titulo','vcnt_descripcion'=>'Descripción','vcnt_educacion'=>'Educación mínima','vcnt_experiencia'=>'Experiencia mínima','vcnt_idioma'=>'Idioma'));
		$crud->columns('vcnt_id','vcnt_status','vcnt_fecha','vcnt_titulo','vcnt_descripcion','vcnt_categoria');

		$crud->required_fields('vcnt_titulo','vcnt_estado','vcnt_localidad','vcnt_jornada','vcnt_sueldo','vcnt_descripcion','vcnt_educacion','vcnt_experiencia','vcnt_cantidad');
		$fechaHoy = date('Y-m-d H:i:s',now()+3600);
		$crud->field_type('vcnt_fecha', 'hidden', $fechaHoy);
		$crud->field_type('vcnt_status', 'true_false');
		$crud->field_type('vcnt_sueldo', 'integer');
		$crud->field_type('vcnt_cantidad','enum', range(1, 9));
		$crud->field_type('vcnt_educacion','enum', array('Educación primaria','Educación secundaria','Educación media superior -Bachillerato General','Educación media superior - Educación Profesional Técnica'));
		$crud->field_type('vcnt_experiencia','enum', array('Sin experiencia','1 año','2 años','3 años'));

		$crud->set_relation('vcnt_estado', 'estados', 'std_nombre');
		$crud->set_relation('vcnt_ciudad', 'municipios', 'mncps_nombre');

		$crud->set_primary_key('att_id','vacantes_att');
		$crud->set_relation('vcnt_categoria', 'vacantes_att', 'att_value');

		$this->load->library('Gc_dependent_select');

		$fields = array(
			'vcnt_estado' => array( // first dropdown name
				'table_name' => 'estados', // table of country
				'title' => 'std_nombre', // country title
				'relate' => null // the first dropdown hasn't a relation
			),
			'vcnt_ciudad' => array( // second dropdown name
				'table_name' => 'municipios', // table of state
				'title' => 'mncps_nombre', // state title
				'id_field' => 'mncps_id', // table of state: primary key
				'relate' => 'mncps_std_id', // table of state:
				'data-placeholder' => 'Seleccionar Ciudad / Localidad', //dropdown's data-placeholder:
				'order_by'=>"mncps_nombre ASC",
			)
		);

		$config = array(
			'main_table' => 'vacantes',
			'main_table_primary' => 'vcnt_id',
			'url' => base_url() . __CLASS__ . '/' . __FUNCTION__ . '/'
		);

		$categories = new gc_dependent_select($crud, $fields, $config);
		$js = $categories->get_js();
		$output = $crud->render();
		$output->output.= $js;

		$salida = get_object_vars($output);
		$titulo = "Gestor de vacantes | People Connection";

		$this->load->view('gestion/crud',compact('salida','titulo','data'));
	}

	public function acceso() {
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required'); 
		
		if($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Acceso de gestores | People Connection";
			$this->load->view('gestion/header',$data);
			$this->load->view('gestion/login');
			$this->load->view('gestion/footer');
		}
		else {

			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);

			$gestorInfo = $this->gestion_model->checkLogin($clean);

			if(!$gestorInfo) {
				$this->session->set_flashdata('flash_message', 'Acceso denegado, por favor revisa tus datos.');
				redirect(site_url().'gestion/acceso');
			}                
			foreach($gestorInfo as $key=>$val) {
				$this->session->set_userdata($key, $val);
			}
			redirect(site_url().'gestion/');
		}
		
	}
		
	public function registro() {

		$this->form_validation->set_rules('firstname', 'First Name', 'required');
		$this->form_validation->set_rules('lastname', 'Last Name', 'required');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');

		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Registro de Gestor";
			$this->load->view('gestion/header',$data);
			$this->load->view('gestion/register');
			$this->load->view('gestion/footer');
		}
		else {
			if($this->gestion_model->isDuplicate($this->input->post('email'))){
				$this->session->set_flashdata('flash_message', 'El correo ingresado ya se encuentra registrado.');
				redirect(site_url().'gestion/acceso');
			}
			else {
				$clean = $this->security->xss_clean($this->input->post(NULL, TRUE));
				$id = $this->gestion_model->insertUser($clean);
				$token = $this->gestion_model->insertToken($id);
				
				$qstring = base64_encode($token);
				$url = site_url() . 'gestion/confirmar/token/' . $qstring;
				$link = '<a href="' . $url . '">' . $url . '</a>';
				$para = $this->input->post('firstname');

				$this->load->view('gestion/email/registro', compact('url','para'));

				// $de_email = "no_reply@peopleconnection.mx";
				// $nombre = "People Connection";
				// $asunto = "Te haz registrado como Candidato";
				// $para_email = $this->input->post('email');

				//config smtp
				// $config['useragent']        = 'PHPMailer';              // Mail engine switcher: 'CodeIgniter' or 'PHPMailer'
				// $config['protocol']         = 'smtp';                   // 'mail', 'sendmail', or 'smtp'
				// $config['mailpath']         = '/usr/sbin/sendmail';
				// $config['smtp_host']        = 'localhost';
				// $config['smtp_user']        = 'contacto@peopleconnection.mx';
				// $config['smtp_pass']        = 'Ft4k4.t72t9hDJz';
				// $config['smtp_port']        = 465;
				// $config['smtp_timeout']     = 30;                       // (in seconds)
				// $config['smtp_crypto']      = 'ssl';                    // '' or 'tls' or 'ssl'
				// $config['smtp_debug']       = 0;                        // PHPMailer's SMTP debug info level: 0 = off, 1 = commands, 2 = commands and data, 3 = as 2 plus connection status, 4 = low level data output.
				// $config['smtp_auto_tls']    = false;                    // Whether to enable TLS encryption automatically if a server supports it, even if `smtp_crypto` is not set to 'tls'.
				// $config['smtp_conn_options'] = array();                 // SMTP connection options, an array passed to the function stream_context_create() when connecting via SMTP.
				// $config['wordwrap']         = true;
				// $config['wrapchars']        = 76;
				// $config['mailtype']         = 'html';                   // 'text' or 'html'
				// $config['charset']          = 'UTF-8';                  // 'UTF-8', 'ISO-8859-15', ...; NULL (preferable) means config_item('charset'), i.e. the character set of the site.
				// $config['validate']         = true;
				// $config['priority']         = 3;                        // 1, 2, 3, 4, 5; on PHPMailer useragent NULL is a possible option, it means that X-priority header is not set at all, see https://github.com/PHPMailer/PHPMailer/issues/449
				// $config['crlf']             = "\n";                     // "\r\n" or "\n" or "\r"
				// $config['newline']          = "\n";                     // "\r\n" or "\n" or "\r"
				// $config['bcc_batch_mode']   = false;
				// $config['bcc_batch_size']   = 200;
				// $config['encoding']         = '8bit';                   // The body encoding. For CodeIgniter: '8bit' or '7bit'. For PHPMailer: '8bit', '7bit', 'binary', 'base64', or 'quoted-printable'.
				// $this->load->library('email', $config);

				// //mandar correo
				// $this->email->from($de_email, $nombre);
				// $this->email->to($para_email);
				// $this->email->subject($asunto);
				// $data['link'] = $link;
				// $data['para'] = $para_email;
				// $body = $this->load->view('gestion/email/registro',$data,TRUE);
				// $this->email->message($body);
				// $this->email->send();

				// $this->session->set_flashdata('flash_message', 'Gracias, por favor revisa la bandeja de entrada del correo registrado, en algunas ocaciones puede llegar a la bandeja de correo no deseado.');
				// redirect(site_url().'gestion/acceso');

				// $message = '';
				// $message .= '<strong>Confirm your registration!</strong><br>';
				// $message .= '<strong>Please click:</strong> ' . $link;

				// echo $message; //send this through mail
				// exit;
			};
		}
	}
	
	// protected function _islocal() {
	// 	return strpos($_SERVER['HTTP_HOST'], 'local');
	// }

	public function confirmar() {
		$token = base64_decode($this->uri->segment(4));
		$cleanToken = $this->security->xss_clean($token);

		$gestor_info = $this->gestion_model->isTokenValid($cleanToken); //either false or array();

		if(!$gestor_info){
			$this->session->set_flashdata('flash_message', 'La URL ha caducado, por favor restablece tu password.');
			redirect(site_url().'gestion/acceso');
		}

		$data = array(
			'firstName'=> $gestor_info->gstr_first_name,
			'email'=>$gestor_info->gstr_email,
			'candidato_id'=>'',
			'gestor_id'=>$gestor_info->gstr_id,
			'token'=>base64_encode($token)
		);

		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required|matches[password]');
		
		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Confirmar Registro Gestor";
			$this->load->view('gestion/header', $data);
			$this->load->view('gestion/complete', $data);
			$this->load->view('gestion/footer');
		}

		else {
			
			$this->load->library('password');
			$post = $this->input->post(NULL, TRUE);
			
			$cleanPost = $this->security->xss_clean($post);
			
			$hashed = $this->password->create_hash($cleanPost['password']);
			$cleanPost['password'] = $hashed;
			unset($cleanPost['passconf']);
			$gestorInfo = $this->gestion_model->updateUserInfo($cleanPost);
			
			if(!$gestorInfo) {
				$this->session->set_flashdata('flash_message', 'Ocurrió un problema actualizando el registro.');
				redirect(site_url().'gestion/acceso');
			}
			
			unset($gestorInfo->password);
			
			foreach($gestorInfo as $key=>$val) {
				$this->session->set_userdata($key, $val);
			}

			redirect(site_url().'gestion/');
		}
	}

	public function restablecer() {
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email'); 

		if($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Restablecer password | People Connection";
			$this->load->view('gestion/header', $data);
			$this->load->view('gestion/forgot');
			$this->load->view('gestion/footer');
		}
		else {
			$email = $this->input->post('email');
			$clean = $this->security->xss_clean($email);
			$gestorInfo = $this->gestion_model->getUserInfoByEmail($clean);

			if(!$gestorInfo) {
				$this->session->set_flashdata('flash_message', 'El correo ingresado no esta registrado.');
				redirect(site_url().'gestion/acceso');
			}

			if($gestorInfo->gstr_status != $this->status[1]) { //if status is not approved
				$this->session->set_flashdata('flash_message', 'Tu registro esta pendiente de aprobación.');
				redirect(site_url().'gestion/acceso');
			}

			//build token 

			$token = $this->gestion_model->insertToken($gestorInfo->gstr_id);
			$qstring = base64_encode($token);
			$url = site_url() . 'gestion/reset/token/' . $qstring;
			$link = '<a href="' . $url . '">' . $url . '</a>';

			$para = $gestorInfo->gstr_first_name;

			$this->load->view('gestion/email/reset_password', compact('url','para'));

			// $message = '';
			// $message .= '<strong>A password reset has been requested for this email account</strong><br>';
			// $message .= '<strong>Please click:</strong> ' . $link;

			// echo $message; //send this through mail
			// exit;

			// $de_email = "no_reply@peopleconnection.mx";
			// $nombre = "People Connection";
			// $asunto = "Te haz registrado como Candidato";
			// $para_email = $this->input->post('email');

			//config smtp
			// $config['useragent']        = 'PHPMailer';              // Mail engine switcher: 'CodeIgniter' or 'PHPMailer'
			// $config['protocol']         = 'smtp';                   // 'mail', 'sendmail', or 'smtp'
			// $config['mailpath']         = '/usr/sbin/sendmail';
			// $config['smtp_host']        = 'localhost';
			// $config['smtp_user']        = 'contacto@peopleconnection.mx';
			// $config['smtp_pass']        = 'Ft4k4.t72t9hDJz';
			// $config['smtp_port']        = 465;
			// $config['smtp_timeout']     = 30;                       // (in seconds)
			// $config['smtp_crypto']      = 'ssl';                    // '' or 'tls' or 'ssl'
			// $config['smtp_debug']       = 0;                        // PHPMailer's SMTP debug info level: 0 = off, 1 = commands, 2 = commands and data, 3 = as 2 plus connection status, 4 = low level data output.
			// $config['smtp_auto_tls']    = false;                    // Whether to enable TLS encryption automatically if a server supports it, even if `smtp_crypto` is not set to 'tls'.
			// $config['smtp_conn_options'] = array();                 // SMTP connection options, an array passed to the function stream_context_create() when connecting via SMTP.
			// $config['wordwrap']         = true;
			// $config['wrapchars']        = 76;
			// $config['mailtype']         = 'html';                   // 'text' or 'html'
			// $config['charset']          = 'UTF-8';                  // 'UTF-8', 'ISO-8859-15', ...; NULL (preferable) means config_item('charset'), i.e. the character set of the site.
			// $config['validate']         = true;
			// $config['priority']         = 3;                        // 1, 2, 3, 4, 5; on PHPMailer useragent NULL is a possible option, it means that X-priority header is not set at all, see https://github.com/PHPMailer/PHPMailer/issues/449
			// $config['crlf']             = "\n";                     // "\r\n" or "\n" or "\r"
			// $config['newline']          = "\n";                     // "\r\n" or "\n" or "\r"
			// $config['bcc_batch_mode']   = false;
			// $config['bcc_batch_size']   = 200;
			// $config['encoding']         = '8bit';                   // The body encoding. For CodeIgniter: '8bit' or '7bit'. For PHPMailer: '8bit', '7bit', 'binary', 'base64', or 'quoted-printable'.
			// $this->load->library('email', $config);

			// //mandar correo
			// $this->email->from($de_email, $nombre);
			// $this->email->to($para_email);
			// $this->email->subject($asunto);
			// $data['link'] = $link;
			// $data['para'] = $para_email;
			// $body = $this->load->view('gestion/email/registro',$data,TRUE);
			// $this->email->message($body);
			// $this->email->send();

			// $this->session->set_flashdata('flash_message', 'Gracias, por favor revisa la bandeja de entrada del correo registrado, en algunas ocaciones puede llegar a la bandeja de correo no deseado.');
			// redirect(site_url().'gestion/acceso');
		}
	}

	public function reset() {
		$token = base64_decode($this->uri->segment(4));
		$cleanToken = $this->security->xss_clean($token);

		$gestor_info = $this->gestion_model->isTokenValid($cleanToken); //either false or array();

		if(!$gestor_info){
			$this->session->set_flashdata('flash_message', 'La URL ha caducado, por favor restablece tu password de nuevo.');
			redirect(site_url().'gestion/acceso');
		}
		$data = array(
			'firstName'=> $gestor_info->gstr_first_name,
			'email'=>$gestor_info->gstr_email,
			'gestor_id'=>$gestor_info->gstr_id,
			'token'=>base64_encode($token)
		);

		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required|matches[password]');
		
		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Restablecer password | People Connection";
			$this->load->view('gestion/header',$data);
			$this->load->view('gestion/reset_password', $data);
			$this->load->view('gestion/footer');
		}

		else {
			$this->load->library('password');
			$post = $this->input->post(NULL, TRUE);
			$cleanPost = $this->security->xss_clean($post);
			$hashed = $this->password->create_hash($cleanPost['password']);
			$cleanPost['password'] = $hashed;
			unset($cleanPost['passconf']);
			if(!$this->gestion_model->updatePassword($cleanPost)){
				$this->session->set_flashdata('flash_message', 'Ocurrió un problema actualizando tu password.');
			}
			else {
				$this->session->set_flashdata('flash_message', 'Tu password fue actualizado exitosamente, ahora puedes ingresar con los nuevos datos.');
			}
			redirect(site_url().'gestion/acceso');
		}
	}

	public function salir() {
		$this->session->sess_destroy();
		redirect(site_url().'gestion/acceso/');
	}

}
