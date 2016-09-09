<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Email_Gestion_Registro extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data = array(
            'para' => 'Ricardo',
            'url' => 'http://demo/gestion/confirmar/token/M2YzNjBhZWFiOTU4MzAyZTRmYzJmN2NjMzhmZTZi'
        );
        $this->load->view('gestion/email/registro', $data);
    }

}
