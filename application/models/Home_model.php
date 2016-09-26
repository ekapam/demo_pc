<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home_model extends CI_Model {

	public function getVacantes() {
		// $query = $this->db->query("SELECT
			// vcnt_id, vcnt_jornada, vcnt_titulo, vcnt_fecha,
			// GROUP_CONCAT(`estados`.`std_nombre`) as `vcnt_estado`,
			// GROUP_CONCAT(`municipios`.`mncps_nombre`) as `vcnt_ciudad`,
			// GROUP_CONCAT(`vac_jornada`.`vac_jorn_value`) as `vcnt_jornada`
			// FROM `vacantes`,`estados`,`municipios`,`vac_jornada`
			// WHERE `vacantes`.`vcnt_status`= '1' AND `vacantes`.`vcnt_estado`=`estados`.`std_id` AND `vacantes`.`vcnt_ciudad`=`municipios`.`mncps_id` AND `vacantes`.`vcnt_jornada`=`vac_jornada`.`vac_jorn_id`
			// GROUP BY `vacantes`.`vcnt_id`
			// ORDER BY `vacantes`.`vcnt_id` DESC
			// LIMIT 5");
		$this->db->select('
			vcnt_id,
			vcnt_fecha,
			vcnt_titulo,
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
			vcnt_estado=estados.std_id AND
			vcnt_ciudad=municipios.mncps_id AND
			vcnt_jornada=vac_jornada.vac_jorn_id
		');
		$this->db->group_by('vcnt_id');
		$this->db->order_by('vcnt_id', 'desc');
		$this->db->limit(5);
		$query = $this->db->get();
		return $query->result();
	}

	public function getVacantes_old(){
		$this->db->select('vcnt_id, vcnt_jornada, vcnt_titulo, vcnt_ciudad, vcnt_estado, vcnt_fecha');
		$this->db->from('vacantes');
		$this->db->order_by('vcnt_id','desc');
		$this->db->limit(5);
		$query = $this->db->get();
		return $query->result();
	}

}

// select
//   ordered_item.id as `Id`,
//   ordered_item.Item_Name as `ItemName`,
//   GROUP_CONCAT(Ordered_Options.Value) as `Options`
// from
//   ordered_item,
//   ordered_options
// where
//   ordered_item.id=ordered_options.ordered_item_id
// group by
//   ordered_item.id