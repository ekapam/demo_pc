<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Bolsa_model extends CI_Model {

	// public function Vacantes() {
	// 	$offset = $this->uri->segment(3);
	// 	$query = $this->db->order_by('vcnt_id','desc')->limit(10, $offset)->get('vacantes');
	// 	return $query->result();
	// }

	public function Vacantes() {
		$offset = $this->uri->segment(3);
		$this->db->select('
			vcnt_id,
			vcnt_status,
			vcnt_jornada,
			vcnt_titulo,
			vcnt_fecha,
			GROUP_CONCAT(estados.std_nombre) as vcnt_estado,
			GROUP_CONCAT(municipios.mncps_nombre) as vcnt_ciudad,
			GROUP_CONCAT(vac_jornada.vac_jorn_value) as vcnt_jornada
			');
		$this->db->from('
			vacantes,
			estados,
			municipios,
			vac_jornada
		');
		$this->db->where('
			vcnt_status=1 AND
			vcnt_estado=std_id AND
			vcnt_ciudad=mncps_id AND
			vcnt_jornada=vac_jorn_id
		');
		$this->db->group_by('vcnt_id');
		$this->db->order_by('vcnt_id', 'desc');
		$this->db->limit(10, $offset);
		$query = $this->db->get();
		return $query->result();
	}

	public function getNumVacantes() {
		return $this->db->count_all_results('vacantes');	
	}

	// public function getVacante($id){
	// 	$condicion = "vcnt_id=" . "'" . $id . "'";
	// 	$this->db->select('*');
	// 	$this->db->from('vacantes');
	// 	$this->db->where($condicion);
	// 	$this->db->limit(1);
	// 	$query = $this->db->get();
	// 	if ($query->num_rows() == 1) {
	// 		return $query->result();
	// 	}
	// 	else {
	// 		return false;
	// 	}
	// }

	public function getVacante($id){
		$this->db->select('
			vcnt_id,
			vcnt_status,
			vcnt_fecha,
			vcnt_titulo,
			GROUP_CONCAT(vac_categoria.vac_cat_value) as vcnt_categoria,
			vcnt_descripcion,
			GROUP_CONCAT(estados.std_nombre) as vcnt_estado,
			GROUP_CONCAT(municipios.mncps_nombre) as vcnt_ciudad,
			GROUP_CONCAT(vac_jornada.vac_jorn_value) as vcnt_jornada,
			GROUP_CONCAT(vac_contrato.vac_cont_value) as vcnt_contrato,
			vcnt_sueldo,
			vcnt_sueldo_convenir,
			vcnt_cantidad,
			GROUP_CONCAT(vac_experiencia.vac_expe_value) as vcnt_experiencia,
			GROUP_CONCAT(vac_educacion.vac_educ_value) as vcnt_educacion,
			vcnt_idiomas
			');
		$this->db->from('
			vacantes,
			vac_categoria,
			vac_contrato,
			vac_educacion,
			vac_experiencia,
			vac_jornada,
			estados,
			municipios
		');
		$this->db->where('
			vcnt_id='.$id.' AND
			vcnt_categoria=vac_cat_id AND
			vcnt_estado=std_id AND
			vcnt_ciudad=mncps_id AND
			vcnt_jornada=vac_jorn_id AND
			vcnt_contrato=vac_cont_id AND
			vcnt_experiencia=vac_expe_id AND
			vcnt_educacion=vac_educ_id
		');
		$query = $this->db->get();
		return $query->result();
	}
}
