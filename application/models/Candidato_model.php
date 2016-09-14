<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Candidato_model extends CI_Model {

	public $candidato_status; 
	
	function __construct(){
		// Call the Model constructor
		parent::__construct();
		$this->status = $this->config->item('candidato_status');
	}    
	
	public function insertUser($d) {  
			$string = array(
				'cnd_first_name'=>$d['firstname'],
				'cnd_last_name'=>$d['lastname'],
				'cnd_email'=>$d['email'],
				'cnd_status'=>$this->status[0]
			);
			$q = $this->db->insert_string('candidatos',$string);
			$this->db->query($q);
			return $this->db->insert_id();
	}
	
	public function isDuplicate($email) {
		$this->db->get_where('candidatos', array('cnd_email' => $email), 1);
		return $this->db->affected_rows() > 0 ? TRUE : FALSE;
	}
	
	public function insertToken($candidato_id) {
		$token = substr(sha1(rand()), 0, 30);
		$date = date('Y-m-d H:i:s');
		
		$string = array(
				'tkn_token'=> $token,
				'tkn_es_gstr'=>'-1',
				'tkn_es_cnd'=>$candidato_id,
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
			
			$candidato_info = $this->getUserInfo($row->tkn_es_cnd);
			return $candidato_info;
			
		}
		else {
			return false;
		}
		
	}    
	
	public function getUserInfo($id) {
		$q = $this->db->get_where('candidatos', array('cnd_id' => $id), 1);
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
			   'cnd_password' => $post['password'],
			   'cnd_last_login' => date('Y-m-d H:i:s'),
			   'cnd_status' => $this->status[1]
			);
		$this->db->where('cnd_id', $post['candidato_id']);
		$this->db->update('candidatos', $data); 
		$success = $this->db->affected_rows(); 
		
		if(!$success) {
			error_log('Unable to updateUserInfo ('.$post['candidato_id'].')');
			return false;
		}
		
		$candidato_info = $this->getUserInfo($post['candidato_id']);
		return $candidato_info; 
	}
	
	public function checkLogin($post) {
		$this->load->library('password');
		$this->db->select('*');
		$this->db->where('cnd_email', $post['email']);
		$query = $this->db->get('candidatos');
		$candidatoInfo = $query->row();
		
		if(!$this->password->validate_password($post['password'], $candidatoInfo->cnd_password)){
			error_log('Unsuccessful login attempt ('.$post['email'].')');
			return false;
		}
		
		$this->updateLoginTime($candidatoInfo->cnd_id);
		
		unset($candidatoInfo->cnd_password);
		return $candidatoInfo;
	}
	
	public function updateLoginTime($id) {
		$this->db->where('cnd_id', $id);
		$this->db->update('candidatos', array('cnd_last_login' => date('Y-m-d H:i:s')));
		return;
	}
	
	public function getUserInfoByEmail($email) {
		$q = $this->db->get_where('candidatos', array('cnd_email' => $email), 1);
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
		$this->db->where('cnd_id', $post['candidato_id']);
		$this->db->update('candidatos', array('cnd_password' => $post['password'])); 
		$success = $this->db->affected_rows(); 
		
		if(!$success) {
			error_log('Unable to update Password ('.$post['candidato_id'].')');
			return false;
		}
		return true;
	}
	
}
