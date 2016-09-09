<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Boletin extends CI_Controller {

    function __construct() {
        parent::__construct();
    }

    function index() {
        $data['titulo'] = "Boletín Mensual | People Connection | Soluciones en Recursos Humanos";
        $data['js'] = "boletines.js";
        // $data['chat'] = $this->load->view('chat', $data, TRUE);
        $this->load->view('header', $data);
        $this->load->view('menu');
        $this->load->view('boletin/boletines');
        $this->load->view('footer', $data);
    }

    public function dosmil_16_01() {
        $data['titulo'] = "Boletin Enero | People Connection | Soluciones en Recursos Humanos";
        $this->load->view('boletin/header',$data);
        $data['boletin'] = "2016-01";
        $data['paginas'] = 16;
        $this->load->view('boletin/boletin',$data);
        $data['js'] = "boletin.js";
        $this->load->view('boletin/footer',$data);
    }

    public function dosmil_16_02() {
        $data['titulo'] = "Boletin Febrero | People Connection | Soluciones en Recursos Humanos";
        $this->load->view('boletin/header',$data);
        $data['boletin'] = "2016-02";
        $data['paginas'] = 18;
        $this->load->view('boletin/boletin',$data);
        $data['js'] = "boletin.js";
        $this->load->view('boletin/footer',$data);
    }

    public function dosmil_16_03() {
        $data['titulo'] = "Boletin Marzo | People Connection | Soluciones en Recursos Humanos";
        $this->load->view('boletin/header',$data);
        $data['boletin'] = "2016-03";
        $data['paginas'] = 14;
        $this->load->view('boletin/boletin',$data);
        $data['js'] = "boletin.js";
        $this->load->view('boletin/footer',$data);
    }
    
    public function dosmil_16_04() {
        $data['titulo'] = "Boletin Abril | People Connection | Soluciones en Recursos Humanos";
        $this->load->view('boletin/header',$data);
        $data['boletin'] = "2016-04";
        $data['paginas'] = 14;
        $this->load->view('boletin/boletin',$data);
        $data['js'] = "boletin.js";
        $this->load->view('boletin/footer',$data);
    }
}
