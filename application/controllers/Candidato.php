<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Candidato extends CI_Controller {
		
	public $candidato_status;

	function __construct() {
		parent::__construct();
		$this->load->model('Candidato_model', 'candidato_model', TRUE);
		$this->form_validation->set_error_delimiters('<div class="error">', '</div>');
		$this->status = $this->config->item('candidato_status');
	}
	
	public function index() {
			if(empty($this->session->userdata['cnd_email'])){
				redirect(site_url().'candidato/acceso/');
			}
			$data = $this->session->userdata;
			$datos['titulo'] = "Mi Perfil";
			$datos['js'] = "main.js";
			$this->load->view('candidato/header',$datos);
			$this->load->view('candidato/menu');
			$this->load->view('candidato/index', $data);
			$this->load->view('candidato/footer',$datos);
	}

	public function acceso() {
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('password', 'Password', 'required'); 

		if($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Acceso";
			$this->load->view('candidato/header',$data);
			$this->load->view('candidato/login');
			$this->load->view('candidato/footer');
		}
		else {

			$post = $this->input->post();  
			$clean = $this->security->xss_clean($post);

			$candidatoInfo = $this->candidato_model->checkLogin($clean);

			if(!$candidatoInfo) {
				$this->session->set_flashdata('flash_message', 'Hubo un problema con el acceso, por favor, verifique sus datos e intente de nuevo.');
				redirect(site_url().'candidato/acceso');
			}
			foreach($candidatoInfo as $key=>$val) {
				$this->session->set_userdata($key, $val);
			}
			redirect(site_url().'candidato/');
		}
	}
	
	public function registro() {

		$this->form_validation->set_rules('firstname', 'First Name', 'required');
		$this->form_validation->set_rules('lastname', 'Last Name', 'required');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');

		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Registro de Candidato";
			$this->load->view('candidato/header',$data);
			$this->load->view('candidato/register');
			$this->load->view('candidato/footer');
		}
		else {
			if($this->candidato_model->isDuplicate($this->input->post('email'))){
				$this->session->set_flashdata('flash_message', 'El email ingresado ya esta registrado.');
				redirect(site_url().'candidato/acceso');
			}
			else {
				$clean = $this->security->xss_clean($this->input->post(NULL, TRUE));
				$id = $this->candidato_model->insertUser($clean);
				$token = $this->candidato_model->insertToken($id);
				
				$qstring = base64_encode($token);
				$url = site_url() . 'candidato/confirmar/token/' . $qstring;
				$link = '<a href="' . $url . '">' . $url . '</a>';
				$para = $this->input->post('firstname');

				$this->load->view('candidato/email/registro', compact('url','para'));
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
				// $body = $this->load->view('candidato/email/registro',$data,TRUE);
				// $this->email->message($body);
				// $this->email->send();

				// $this->session->set_flashdata('flash_message', 'Gracias, por favor revisa la bandeja de entrada del correo registrado, en algunas ocaciones puede llegar a la bandeja de correo no deseado.');
				// redirect(site_url().'candidato/acceso');

				// $message = '';
				// $message .= '<strong>Confirmar</strong><br>';
				// $message .= 'Link: ' . $link;

				// echo $message; //send this through mail
				// exit;
			}
		}
	}
	
	// protected function _islocal() {
	// 	return strpos($_SERVER['HTTP_HOST'], 'local');
	// }

	public function confirmar() {
		$token = base64_decode($this->uri->segment(4));
		$cleanToken = $this->security->xss_clean($token);

		$candidato_info = $this->candidato_model->isTokenValid($cleanToken); //either false or array();

		if(!$candidato_info){
			$this->session->set_flashdata('flash_message', 'La URL ha caducado, por favor restablece tu password.');
			redirect(site_url().'candidato/acceso');
		}

		$data = array(
			'firstName'=> $candidato_info->cnd_first_name,
			'email'=>$candidato_info->cnd_email,
			'candidato_id'=>$candidato_info->cnd_id,
			'gestor_id'=>'',
			'token'=>base64_encode($token)
		);

		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required|matches[password]');
		
		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Confirmar Registro Candidato";
			$this->load->view('candidato/header', $data);
			$this->load->view('candidato/complete', $data);
			$this->load->view('candidato/footer');
		}

		else {
			
			$this->load->library('password');
			$post = $this->input->post(NULL, TRUE);
			
			$cleanPost = $this->security->xss_clean($post);
			
			$hashed = $this->password->create_hash($cleanPost['password']);
			$cleanPost['password'] = $hashed;
			unset($cleanPost['passconf']);
			$candidatoInfo = $this->candidato_model->updateUserInfo($cleanPost);
			
			if(!$candidatoInfo) {
				$this->session->set_flashdata('flash_message', 'Hubo un problema, por favor intente de nuevo.');
				redirect(site_url().'candidato/acceso');
			}
			
			unset($candidatoInfo->password);
			
			foreach($candidatoInfo as $key=>$val) {
				$this->session->set_userdata($key, $val);
			}

			redirect(site_url().'candidato/');
		}
	}

	public function restablecer() {
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email'); 
		
		if($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Restablecer contraseña";
			$this->load->view('candidato/header',$data);
			$this->load->view('candidato/forgot');
			$this->load->view('candidato/footer');
		}
		else {
			$email = $this->input->post('email');
			$clean = $this->security->xss_clean($email);
			$candidatoInfo = $this->candidato_model->getUserInfoByEmail($clean);
			
			if(!$candidatoInfo) {
				$this->session->set_flashdata('flash_message', 'El correo ingresado no esta registrado, por favor verifica tus datos.');
				redirect(site_url().'candidato/acceso');
			}
			
			if($candidatoInfo->cnd_status != $this->status[1]) { //if status is not approved
				$this->session->set_flashdata('flash_message', 'Aun no haz confirmado tu cuenta, por favor verifica tu bandeja de entrada.');
				redirect(site_url().'candidato/acceso');
			}
			
			//build token 
			
			$token = $this->candidato_model->insertToken($candidatoInfo->cnd_id);
			$qstring = base64_encode($token);
			$url = site_url() . 'candidato/reset/token/' . $qstring;
			$link = '<a href="' . $url . '">' . $url . '</a>';
			
			$message = '';
			$message .= '<strong>Restablecer contraseña</strong><br>';
			$message .= 'Link: ' . $link;

			echo $message; //send this through mail
			exit;

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
			// $body = $this->load->view('candidato/email/registro',$data,TRUE);
			// $this->email->message($body);
			// $this->email->send();

			// $this->session->set_flashdata('flash_message', 'Gracias, por favor revisa la bandeja de entrada del correo registrado, en algunas ocaciones puede llegar a la bandeja de correo no deseado.');
			// redirect(site_url().'candidato/acceso');
		}
	}
	
	public function reset() {
		$token = base64_decode($this->uri->segment(4));
		$cleanToken = $this->security->xss_clean($token);
		
		$candidato_info = $this->candidato_model->isTokenValid($cleanToken); //either false or array();
		
		if(!$candidato_info){
			$this->session->set_flashdata('flash_message', 'Token invalido ó expirado.');
			redirect(site_url().'candidato/acceso');
		}
		$data = array(
			'firstName'=> $candidato_info->cnd_first_name,
			'email'=>$candidato_info->cnd_email,
			'candidato_id'=>$candidato_info->cnd_id,
			'token'=>base64_encode($token)
		);
		
		$this->form_validation->set_rules('password', 'Password', 'required|min_length[5]');
		$this->form_validation->set_rules('passconf', 'Password Confirmation', 'required|matches[password]');
		
		if ($this->form_validation->run() == FALSE) {
			$data['titulo'] = "Restablecer password | People Connection";
			$this->load->view('candidato/header',$data);
			$this->load->view('candidato/reset_password', $data);
			$this->load->view('candidato/footer');
		}

		else {
			$this->load->library('password');
			$post = $this->input->post(NULL, TRUE);
			$cleanPost = $this->security->xss_clean($post);
			$hashed = $this->password->create_hash($cleanPost['password']);
			$cleanPost['password'] = $hashed;
			unset($cleanPost['passconf']);
			if(!$this->candidato_model->updatePassword($cleanPost)){
				$this->session->set_flashdata('flash_message', 'Hubo un problema restableciendo tu contraseña, por favor verifica las condiciones.');
			}
			else {
				$this->session->set_flashdata('flash_message', 'Tu contraseña fué restablecida correctamente, ahora puedes ingresar.');
			}
			redirect(site_url().'candidato/acceso');
		}
	}

	public function salir() {
		$this->session->sess_destroy();
		redirect(site_url().'candidato/acceso/');
	}

}
