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
			IF (vcnt_categoria > 0, vcnt_categoria=10, GROUP_CONCAT(vac_categoria.vac_cat_value)) as vcnt_categoria,
			vcnt_descripcion,
			vcnt_requisitos,
			vcnt_oferta,
			vcnt_horario,
			IF (vcnt_estado > 0, GROUP_CONCAT(estados.std_nombre), NULL) as vcnt_estado,
			IF (vcnt_ciudad > 0, GROUP_CONCAT(municipios.mncps_nombre), NULL) as vcnt_ciudad,
			IF (vcnt_jornada > 0, GROUP_CONCAT(vac_jornada.vac_jorn_value), NULL) as vcnt_jornada,
			IF (vcnt_contrato > 0, GROUP_CONCAT(vac_contrato.vac_cont_value), NULL) as vcnt_contrato,
			vcnt_sueldo,
			vcnt_sueldo_convenir,
			vcnt_cantidad,
			IF (vcnt_experiencia > 0, GROUP_CONCAT(vac_experiencia.vac_expe_value), NULL) as vcnt_experiencia,
			IF (vcnt_educacion > 0, GROUP_CONCAT(vac_educacion.vac_educ_value), NULL) as vcnt_educacion,
			IF (vcnt_idiomas > 0, GROUP_CONCAT(vac_idiomas.vac_idiomas_value), NULL) as vcnt_idiomas,
			IF (vcnt_idiomas_nivel > 0, GROUP_CONCAT(vac_idiomas_nivel.vac_idiomas_nivel_value), NULL) as vcnt_idiomas_nivel,
			IF (vcnt_licencia > 0, GROUP_CONCAT(vac_licencia.vac_licencia_value), NULL) as vcnt_licencia
			');
		$this->db->from('
			vacantes,
			vac_categoria,
			vac_contrato,
			vac_educacion,
			vac_experiencia,
			vac_jornada,
			vac_idiomas,
			vac_idiomas_nivel,
			vac_licencia,
			estados,
			municipios
		');
		$this->db->where("
			vcnt_id='".$id."' AND
			vcnt_categoria=vac_cat_id AND
			vcnt_estado=std_id AND
			vcnt_ciudad=mncps_id AND
			vcnt_jornada=vac_jorn_id AND
			vcnt_contrato=vac_cont_id AND
			vcnt_experiencia=vac_expe_id AND
			vcnt_educacion=vac_educ_id AND
			vcnt_idiomas=vac_idiomas_id AND
			vcnt_idiomas_nivel=vac_idiomas_nivel_id AND
			vcnt_licencia=vac_licencia_id
		");
		$query = $this->db->get();
		return $query->result();
	}
}
