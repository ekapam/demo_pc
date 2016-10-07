<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gestion extends CI_Controller {

	public $gestor_status;
	public $rango_b;

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
		elseif ($this->session->userdata['gstr_nivel']==0) {
			$this->session->set_flashdata('flash_message', 'Acceso denegado, activación necesaria.');
			redirect(site_url().'gestion/acceso/');
		}
		$crud = new grocery_CRUD();
		$crud->unset_delete();
		$crud->unset_read();
		$crud->set_table('vacantes');
		$crud->set_subject('Vacante');
		$gstr_id = $this->session->userdata['gstr_id'];
		$crud->where('vcnt_gestor_id',$gstr_id);

		$state = $crud->getState();
		$state_info = $crud->getStateInfo();
		$session = $this->session->userdata;

		// print_r($session);

		$crud->columns('vcnt_id','vcnt_status','vcnt_fecha','vcnt_titulo','vcnt_descripcion','vcnt_categoria');
		$crud->display_as(
			array(
				'vcnt_id'=>'ID',
				'vcnt_status'=>'Visible',
				'vcnt_fecha'=>'Fecha y Hora',
				'vcnt_titulo'=>'Titulo',
				'vcnt_categoria'=>'Categoria',
				'vcnt_descripcion'=>'Descripción',
				'vcnt_estado'=>'Estado',
				'vcnt_ciudad'=>'Ciudad / Localidad',
				'vcnt_jornada'=>'Jornada Laboral',
				'vcnt_contrato'=>'Tipo de contrato',
				'vcnt_sueldo'=>'Sueldo (neto mensual)',
				'vcnt_sueldo_convenir'=>'Mostrar el salario "A convenir"',
				'vcnt_fecha_contratacion'=>'Fecha de Contratación',
				'vcnt_cantidad'=>'Cantidad de vacantes',
				'vcnt_experiencia'=>'Años de experiencia similar',
				'vcnt_rango_edad_a' => 'Rango de Edad',
				'vcnt_educacion'=>'Estudios mínimos',
				'vcnt_idiomas'=>'Idioma',
				'vcnt_idiomas_nivel'=>'Nivel de idioma',
				'vcnt_licencia' => 'Licencia de conducir',
				'vcnt_viajar' => 'Disponibilidad para viajar',
				'vcnt_residencia' => 'Disponiblidad para cambiar de residencia',
				'vcnt_discapacidad' => 'Personas con discapacidad',
				'vcnt_requisitos' => 'Requisitos',
				'vcnt_oferta' => 'Ofrecemos',
				'vcnt_horario' => 'Horario de Trabajo',
				'vcnt_gestor_id' => 'ID Gestor'
			)
		);
		$crud->order_by('vcnt_id','desc');
		$crud->field_type('vcnt_status', 'true_false');

		$crud->set_relation('vcnt_categoria', 'vac_categoria', 'vac_cat_value');
		$crud->set_relation('vcnt_estado', 'estados', 'std_nombre');
		$crud->set_relation('vcnt_ciudad', 'municipios', 'mncps_nombre');
		$crud->set_relation('vcnt_jornada', 'vac_jornada', 'vac_jorn_value',null,'vac_jorn_id');
		$crud->set_relation('vcnt_contrato','vac_contrato','vac_cont_value', null, 'vac_cont_id ASC');
		$crud->set_relation('vcnt_experiencia','vac_experiencia','vac_expe_value', null, 'vac_expe_id ASC');
		$crud->set_relation('vcnt_educacion', 'vac_educacion', 'vac_educ_value', null, 'vac_educ_id ASC');
		$crud->set_relation('vcnt_idiomas', 'vac_idiomas', 'vac_idiomas_value', null, 'vac_idiomas_id ASC');
		$crud->set_relation('vcnt_idiomas_nivel', 'vac_idiomas_nivel', 'vac_idiomas_nivel_value', null, 'vac_idiomas_nivel_id ASC');
		
		$crud->set_rules('vcnt_titulo','Titulo','trim|required|xss_clean|min_length[4]');
		$crud->set_rules('vcnt_categoria','Categoria','trim|required|xss_clean');
		$crud->set_rules('vcnt_descripcion','Descripción','trim|required|xss_clean|min_length[10]');
		$crud->set_rules('vcnt_estado','Estado','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_ciudad','Ciudad','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_jornada','Jornada Laboral','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_contrato','Tipo de Contratación','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_sueldo','Sueldo','trim|numeric|required|xss_clean');
		$crud->set_rules('vcnt_sueldo_convenir','Mostrar el salario "A convenir"','trim|integer|xss_clean');
		$crud->set_rules('vcnt_cantidad','Cantidad de vacantes','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_experiencia','Años de experiencia similar','trim|integer|required|xss_clean');
		$crud->set_rules('vcnt_educacion','Estudios mínimos','trim|integer|required|xss_clean');

		if($state == 'add') {
			$fechaHoy = date('Y-m-d H:i:s',now()+3600);
			$id_gestor = $this->session->userdata['gstr_id'];
			$crud->add_fields(
				'separador_dg',
				'vcnt_status',
				'vcnt_fecha',
				'vcnt_titulo',
				'vcnt_categoria',
				'vcnt_descripcion',
				'vcnt_requisitos',
				'vcnt_oferta',
				'vcnt_horario',
				'vcnt_estado',
				'vcnt_ciudad',
				'vcnt_jornada',
				'vcnt_contrato',
				'vcnt_sueldo',
				'vcnt_sueldo_convenir',
				'vcnt_fecha_contratacion',
				'vcnt_cantidad',
				'separador_req',
				'vcnt_experiencia',
				'vcnt_rango_edad_a',
				'vcnt_educacion',
				'vcnt_idiomas',
				'vcnt_idiomas_nivel',
				'vcnt_licencia',
				'vcnt_viajar',
				'vcnt_residencia',
				'vcnt_discapacidad',
				'vcnt_gestor_id'
			);

			$crud->display_as(
				array(
					'separador_dg'=>'Datos Generales',
					'separador_req'=>'Requisitos'
				)
			);

			$crud->field_type('vcnt_status', 'hidden', TRUE);
			$crud->field_type('vcnt_sueldo', 'integer');
			// $crud->field_type('vcnt_cantidad','enum', range(1, 9));
			$crud->field_type('vcnt_fecha', 'hidden', $fechaHoy);
			$crud->field_type('vcnt_gestor_id', 'hidden', $id_gestor);

			$crud->callback_add_field('separador_dg', array($this, 'func_separador'));
			$crud->callback_add_field('separador_req', array($this, 'func_separador'));
			$crud->callback_add_field('vcnt_sueldo', function () {
				return '<input id="field-vcnt_sueldo" name="vcnt_sueldo" type="text" value="" class="numeric form-control" maxlength="11" style="width:120px;display:inline-block;">&nbsp;&nbsp;<span class="alert alert-warning"><i class="glyphicon glyphicon-exclamation-sign"></i> Inserta el salario sin puntos ni comas</span>';
			});
			$crud->callback_add_field('vcnt_rango_edad_a', function () {
				return 'de <input id="field-vcnt_rango_edad_a" name="vcnt_rango_edad_a" type="text" value="" class="numeric form-control" maxlength="11" style="width:45px;display:inline-block;">&nbsp;a&nbsp;<input id="field-vcnt_rango_edad_b" name="vcnt_rango_edad_b" type="text" value="" class="numeric form-control" maxlength="11" style="width:45px;display:inline-block;"> a&ntilde;os';
			});
			// $crud->callback_add_field('vcnt_licencia', function () {
			// 	return '
			// 	<input id="field-vcnt_licencia" type="checkbox" name="vcnt_licencia" value="1">
			// 	<span>A</span>&nbsp;&nbsp;&nbsp;&nbsp;
			// 	<input id="field-vcnt_licencia" type="checkbox" name="vcnt_licencia" value="2">
			// 	<span>B</span>&nbsp;&nbsp;&nbsp;&nbsp;
			// 	<input id="field-vcnt_licencia" type="checkbox" name="vcnt_licencia" value="3">
			// 	<span>C</span>&nbsp;&nbsp;&nbsp;&nbsp;
			// 	<input id="field-vcnt_licencia" type="checkbox" name="vcnt_licencia" value="4">
			// 	<span>D</span>&nbsp;&nbsp;&nbsp;&nbsp;
			// 	<input id="field-vcnt_licencia" type="checkbox" name="vcnt_licencia" value="5">
			// 	<span>Sin permiso</span>';
			// });

			$crud->required_fields(
				'vcnt_titulo',
				'vcnt_descripcion',
				'vcnt_estado',
				'vcnt_ciudad',
				'vcnt_categoria',
				'vcnt_sueldo',
				'vcnt_jornada',
				'vcnt_contrato',
				'vcnt_cantidad',
				'vcnt_educacion',
				'vcnt_experiencia',
				'vcnt_viajar',
				'vcnt_residencia',
				'vcnt_discapacidad'
			);
		}

		elseif($state == 'edit') {

			$id_vacante = $state_info->primary_key;
			$vacante = $this->gestion_model->getVacantes($id_vacante);

			$id_gestor_en_vacante = $vacante[0]->vcnt_gestor_id;
			$id_gestor = $this->session->userdata['gstr_id'];
			
			if ($id_gestor_en_vacante!=$id_gestor) {
				redirect(site_url().'gestion','refresh');
			}
			
			$crud->edit_fields(
				'separador_dg',
				'vcnt_status',
				'vcnt_fecha',
				'vcnt_titulo',
				'vcnt_categoria',
				'vcnt_descripcion',
				'vcnt_requisitos',
				'vcnt_oferta',
				'vcnt_horario',
				'vcnt_estado',
				'vcnt_ciudad',
				'vcnt_jornada',
				'vcnt_contrato',
				'vcnt_sueldo',
				'vcnt_sueldo_convenir',
				'vcnt_fecha_contratacion',
				'vcnt_cantidad',
				'separador_req',
				'vcnt_experiencia',
				'vcnt_rango_edad_a',
				'vcnt_educacion',
				'vcnt_idiomas',
				'vcnt_idiomas_nivel',
				'vcnt_licencia',
				'vcnt_viajar',
				'vcnt_residencia',
				'vcnt_discapacidad'
			);

			$crud->display_as(
				array(
					'separador_dg'=>'Datos Generales',
					'separador_req'=>'Requisitos',
					'vcnt_status'=>'Visible?',
					'vcnt_fecha'=>'Fecha y hora de creación'
				)
			);

			$crud->field_type('vcnt_fecha','readonly');
			$crud->callback_edit_field('separador_dg', array($this, 'func_separador'));
			$crud->callback_edit_field('separador_req', array($this, 'func_separador'));
			$crud->callback_edit_field('vcnt_sueldo', function ($sueldo) {
				return '<input id="field-vcnt_sueldo" name="vcnt_sueldo" type="text" value="'.$sueldo.'" class="numeric form-control" maxlength="11" style="width:120px;display:inline-block;">&nbsp;&nbsp;<span class="alert alert-warning"><i class="glyphicon glyphicon-exclamation-sign"></i> Inserta el salario sin puntos ni comas</span>';
			});

			$this->rango_b = $vacante[0]->vcnt_rango_edad_b;
			$crud->callback_edit_field('vcnt_rango_edad_a', function ($rango_a) {
				return 'de <input id="field-vcnt_rango_edad_a" name="vcnt_rango_edad_a" type="text" value="'.$rango_a.'" class="numeric form-control" maxlength="11" style="width:45px;display:inline-block;">&nbsp;a&nbsp;<input id="field-vcnt_rango_edad_b" name="vcnt_rango_edad_b" type="text" value="'.$this->rango_b.'" class="numeric form-control" maxlength="11" style="width:45px;display:inline-block;"> a&ntilde;os';
			});

			$crud->required_fields(
				'vcnt_titulo',
				'vcnt_descripcion',
				'vcnt_estado',
				'vcnt_ciudad',
				'vcnt_categoria',
				'vcnt_sueldo',
				'vcnt_jornada',
				'vcnt_contrato',
				'vcnt_cantidad',
				'vcnt_educacion',
				'vcnt_experiencia',
				'vcnt_viajar',
				'vcnt_residencia',
				'vcnt_discapacidad'
			);
		}

		$crud->field_type('vcnt_licencia','multiselect', array("1"=>"Tipo A","2"=>"Tipo B","3"=>"Tipo C","4"=>"Tipo D","5"=>"Sin Licencia"));

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
				'order_by' => 'mncps_nombre ASC'
			)
		);

		$config = array(
			'main_table' => 'vacantes',
			'main_table_primary' => 'vcnt_id',
			'url' => base_url() . __CLASS__ . '/' . __FUNCTION__ . '/'
		);

		$categories = new Gc_dependent_select($crud, $fields, $config);
		$js = $categories->get_js();
		$output = $crud->render();
		$output->output.= $js;

		$salida = get_object_vars($output);
		$titulo = "Gestor de vacantes | People Connection";
		$menu = $this->load->view('gestion/menu', NULL, TRUE);
		$this->load->view('gestion/crud',compact('salida','titulo','menu'));
	}

	public function func_separador($value = null, $primary_key = null) {
		return '&nbsp;';
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

		$this->form_validation->set_rules('firstname', 'Nombre(s)', 'required');
		$this->form_validation->set_rules('lastname', 'Apellidos', 'required');
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

			$this->session->set_flashdata('flash_message', 'Perfecto, tu registro esta completo, ahora solo que una administrador active tu cuenta.');
			redirect(site_url().'gestion/acceso');
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
