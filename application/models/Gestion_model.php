<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Gestion_model extends CI_Model {

	public $gestor_status;
	public $gestor_nivel;

	function __construct(){
		// Call the Model constructor
		parent::__construct();
		$this->status = $this->config->item('gestor_status');
		$this->nivel = $this->config->item('gestor_nivel');
	}

	public function insertUser($d) {
			$string = array(
				'gstr_nivel'=>$this->nivel[0],
				'gstr_email'=>$d['email'],
				'gstr_first_name'=>$d['firstname'],
				'gstr_last_name'=>$d['lastname'],
				'gstr_status'=>$this->status[0],
			);
			$q = $this->db->insert_string('gestores',$string);
			$this->db->query($q);
			return $this->db->insert_id();
	}

	public function isDuplicate($email) {
		$this->db->get_where('gestores', array('gstr_email' => $email), 1);
		return $this->db->affected_rows() > 0 ? TRUE : FALSE;
	}

	public function insertToken($gestor_id) {
		$token = substr(sha1(rand()), 0, 30);
		$date = date('Y-m-d H:i:s');

		$string = array(
				'tkn_token'=> $token,
				'tkn_es_gstr'=>$gestor_id,
				'tkn_es_cnd'=>'-1',
				'tkn_created'=>$date
			);
		$query = $this->db->insert_string('tokens',$string);
		$this->db->query($query);
		return $token;
	}

	public function isTokenValid($token) {
		$q = $this->db->get_where('tokens', array('tkn_token' => $token), 1);
		if($this->db->affected_rows() > 0) {
			$row = $q->row();

			$created = $row->tkn_created;
			$createdTS = strtotime($created);
			$createdTSplusOne = $createdTS+3600;
			$today = date('Y-m-d H:i:s'); 
			$todayTS = strtotime($today);

			if($createdTSplusOne <= $todayTS) {
				return false;
			}

			$gestor_info = $this->getUserInfo($row->tkn_es_gstr);
			return $gestor_info;

		}
		else {
			return false;
		}
	}

	public function getUserInfo($id) {
		$q = $this->db->get_where('gestores', array('gstr_id' => $id), 1);
		if($this->db->affected_rows() > 0){
			$row = $q->row();
			return $row;
		}
		else {
			error_log('no user found getUserInfo ('.$id.')');
			return false;
		}
	}

	public function updateUserInfo($post) {
		$data = array(
				'gstr_password' => $post['password'],
				'gstr_last_login' => date('Y-m-d H:i:s'),
				'gstr_status' => $this->status[1]
			);
		$this->db->where('gstr_id', $post['gestor_id']);
		$this->db->update('gestores', $data); 
		$success = $this->db->affected_rows(); 

		if(!$success) {
			error_log('Unable to updateUserInfo ('.$post['gestor_id'].')');
			return false;
		}

		$gestor_info = $this->getUserInfo($post['gestor_id']);
		return $gestor_info; 
	}

	public function checkLogin($post) {
		$this->load->library('password');
		$this->db->select('*');
		$this->db->where('gstr_email', $post['email']);
		$query = $this->db->get('gestores');
		$gestorInfo = $query->row();

		if(!$this->password->validate_password($post['password'], $gestorInfo->gstr_password)){
			error_log('Unsuccessful login attempt ('.$post['email'].')');
			return false;
		}

		$this->updateLoginTime($gestorInfo->gstr_id);

		unset($gestorInfo->gstr_password);
		return $gestorInfo;
	}

	public function updateLoginTime($id) {
		$this->db->where('gstr_id', $id);
		$this->db->update('gestores', array('gstr_last_login' => date('Y-m-d H:i:s')));
		return;
	}
	
	public function getUserInfoByEmail($email) {
		$q = $this->db->get_where('gestores', array('gstr_email' => $email), 1);
		if($this->db->affected_rows() > 0) {
			$row = $q->row();
			return $row;
		}
		else {
			error_log('no user found getUserInfo ('.$email.')');
			return false;
		}
	}

	public function updatePassword($post) {
		$this->db->where('gstr_id', $post['gestor_id']);
		$this->db->update('gestores', array('gstr_password' => $post['password'])); 
		$success = $this->db->affected_rows(); 

		if(!$success) {
			error_log('Unable to update Password ('.$post['gestor_id'].')');
			return false;
		}
		return true;
	}

	public function getVacantes($id){
		$this->db->select('*');
		$this->db->from('vacantes');
		$this->db->where('vcnt_id='.$id);
		$query = $this->db->get();
		return $query->result();
	}
}