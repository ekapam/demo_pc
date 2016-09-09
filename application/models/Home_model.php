<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Home_model extends CI_Model {

	public function getVacantes() {
		$query = $this->db->query("SELECT
			vcnt_id, vcnt_jornada, vcnt_titulo, vcnt_fecha,
			GROUP_CONCAT(`estados`.`std_nombre`) as `vcnt_estado`,
			GROUP_CONCAT(`municipios`.`mncps_nombre`) as `vcnt_ciudad`
			FROM `vacantes`,`estados`,`municipios`
			WHERE `vacantes`.`vcnt_status`= '1' AND `vacantes`.`vcnt_estado`=`estados`.`std_id` AND `vacantes`.`vcnt_ciudad`=`municipios`.`mncps_id`
			GROUP BY `vacantes`.`vcnt_id`
			ORDER BY `vacantes`.`vcnt_id` DESC
			LIMIT 5");
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