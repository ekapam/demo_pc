<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Formulario extends CI_Controller {
    
    function __construct() {
        parent::__construct();
    }
    
    function getResponse($str){

        $response = $this->recaptcha->verifyResponse($str);
        if ($response['success']) {     
            return TRUE;
        }
        else {
            $this->form_validation->set_message('getResponse', '%s ');
            return FALSE;
        }
    }

    //validacion
    function solo_alfa_espacio($str) {
        if (!preg_match("/^[a-zA-Z ]+$/",$str)) {
            $this->form_validation->set_message('solo_alfa_espacio', 'The %s field must contain only alphabets and space');
            return FALSE;
        }
        else {
            return TRUE;
        }
    }

    function index() {
        $data['recaptcha_html'] = $this->recaptcha->render();
        $data['titulo'] = "Formulario de Contacto";
        $this->load->view('formulario/header', $data);
        $this->load->view('formulario');
        $data['js'] = "formulario.js";
        $this->load->view('formulario/footer',$data);
    }

    function mandar() {
        //reglas
        $this->form_validation->set_rules('nombre', 'Nombre', 'trim|required|callback_solo_alfa_espacio');
        $this->form_validation->set_rules('email', 'Email ID', 'trim|required|valid_email');
        $this->form_validation->set_rules('asunto', 'Asunto', 'trim|required');
        $this->form_validation->set_rules('mensaje', 'Mensaje', 'trim|required');
        $this->form_validation->set_rules('g-recaptcha-response', 'callback_getResponse');

        //validacion
        if ($this->form_validation->run() == FALSE) {
            //si falla
            redirect('formulario','refresh');
        }
        else {
            //si pasa
            $nombre = $this->input->post('nombre');
            $de_email = $this->input->post('email');
            $asunto = $this->input->post('asunto');
            $mensaje = $this->input->post('mensaje');

            //para
            $para_email = 'ricardo.ambriz@peopleconnection.mx';

            //config smtp

            $config['useragent']        = 'PHPMailer';              // Mail engine switcher: 'CodeIgniter' or 'PHPMailer'
            $config['protocol']         = 'smtp';                   // 'mail', 'sendmail', or 'smtp'
            $config['mailpath']         = '/usr/sbin/sendmail';
            $config['smtp_host']        = 'smtpout.secureserver.net';
            $config['smtp_user']        = 'contacto@peopleconnection.mx';
            $config['smtp_pass']        = 'Ft4k4.t72t9hDJz';
            $config['smtp_port']        = 465;
            $config['smtp_timeout']     = 30;                       // (in seconds)
            $config['smtp_crypto']      = 'ssl';                    // '' or 'tls' or 'ssl'
            $config['smtp_debug']       = 0;                        // PHPMailer's SMTP debug info level: 0 = off, 1 = commands, 2 = commands and data, 3 = as 2 plus connection status, 4 = low level data output.
            $config['smtp_auto_tls']    = false;                    // Whether to enable TLS encryption automatically if a server supports it, even if `smtp_crypto` is not set to 'tls'.
            $config['smtp_conn_options'] = array();                 // SMTP connection options, an array passed to the function stream_context_create() when connecting via SMTP.
            $config['wordwrap']         = true;
            $config['wrapchars']        = 76;
            $config['mailtype']         = 'html';                   // 'text' or 'html'
            $config['charset']          = null;                     // 'UTF-8', 'ISO-8859-15', ...; NULL (preferable) means config_item('charset'), i.e. the character set of the site.
            $config['validate']         = true;
            $config['priority']         = 3;                        // 1, 2, 3, 4, 5; on PHPMailer useragent NULL is a possible option, it means that X-priority header is not set at all, see https://github.com/PHPMailer/PHPMailer/issues/449
            $config['crlf']             = "\n";                     // "\r\n" or "\n" or "\r"
            $config['newline']          = "\n";                     // "\r\n" or "\n" or "\r"
            $config['bcc_batch_mode']   = false;
            $config['bcc_batch_size']   = 200;
            $config['encoding']         = '8bit';                   // The body encoding. For CodeIgniter: '8bit' or '7bit'. For PHPMailer: '8bit', '7bit', 'binary', 'base64', or 'quoted-printable'.
            $this->load->library('email', $config);

            //mandar correo
            // $this->email->set_new_line("\r\n");
            $this->email->from($de_email, $nombre);
            $this->email->to($para_email);
            $this->email->subject($asunto);
            $this->email->message($mensaje);

            if ($this->email->send()) {
            // mensaje enviado
                $this->session->set_flashdata('msg','<div class="alert alert-success text-center">Your mail has been sent successfully!</div>');
                redirect('formulario');
            }

            else {
            //mensaje error
                $this->session->set_flashdata('msg','<div class="alert alert-danger text-center">There is error in sending mail! Please try again later</div>');
                redirect('formulario');
            }

        }
    }    

}