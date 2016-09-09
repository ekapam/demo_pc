<?php defined('BASEPATH') OR exit('No direct script access allowed');
$dias = array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sábado");
$meses = array("Diciembre","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre");
?>
<!-- Bolsa -->

		<div class="clearfix visible-lg-block">&nbsp;</div>
		<div class="table-responsive" id="vacantes">
			<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.7s">
				<table class="table table-striped table-hover table-condensed">
					<thead>
						<tr>
							<th>Jornada:</th>
							<th>Descripción:</th>
							<th>Ubicación:</th>
							<th>Fecha de Publicación:</th>
						</tr>
					</thead>
					<tbody>
<?php foreach ($vacantes as $vac) : ?>
						<tr>
							<td><span class="label label-<?php if ($vac->vcnt_jornada == "Tiempo Completo") { echo "success"; } elseif ($vac->vcnt_jornada == "Medio Tiempo") { echo "primary"; } ?>"><?php echo $vac->vcnt_jornada; ?></span></td>
							<td><a href="<?php echo site_url('bolsa-de-trabajo/vacante') . '/' . $vac->vcnt_id; ?>"><strong><?php echo $vac->vcnt_titulo; ?></strong><br/>People Connection</a></td>
							<td><?php echo $vac->vcnt_ciudad; ?>,<br><?php echo $vac->vcnt_estado; ?></td>
							<td><?php $fecha = strtotime($vac->vcnt_fecha); echo $dias[date('w',$fecha)].", ".date('d',$fecha)." / ".$meses[date('n',$fecha)]." / ".date('Y',$fecha); ?></td>
						</tr>
<?php endforeach; ?>
					</tbody>
				</table>
				<?php echo $paginacion; ?>

			</div>
		</div>
	</div>

<!-- Fin Bolsa -->
