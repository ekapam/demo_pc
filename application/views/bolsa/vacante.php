<?php defined('BASEPATH') OR exit('No direct script access allowed'); $vacante = $vacante[0]; ?>
<!-- Vacante -->

	<div class="container conocenos">
		
		<div class="clearfix">&nbsp;</div>

		<div class="row">
			<div class="col-lg-20">
					<ol class="breadcrumb">
						<li><a href="<?php echo site_url('bolsa-de-trabajo'); ?>">Bolsa de Trabajo</a></li>
						<li class="active"><?php echo $vacante->vcnt_titulo; ?></li>
						<li id="regresar" class="pull-right"><a href="<?php echo site_url('bolsa-de-trabajo'); ?>">Regresar</a></li>
					</ol>

					<div class="col-lg-14 col-md-14 col-sm-13">
						<div id="main-datos" class="well">
							<h1><?php echo $vacante->vcnt_titulo; ?></h1>
							<p><?php echo $vacante->vcnt_descripcion; ?></p>
						</div>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-7">
						<div id="sidebar-datos" class="well">
							<div class="encabezado">Fecha de Publicación:</div>
							<div class="datos"><?php $fecha = strtotime($vacante->vcnt_fecha); echo $dias[date('w',$fecha)].", ".date('d',$fecha)." / ".$meses[date('n',$fecha)]." / ".date('Y',$fecha); ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Tipo de Contratación:</div>
							<div class="datos"><?php echo $vacante->vcnt_jornada; ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Sueldo:</div>
<?php if ($vacante->vcnt_sueldo_convenir==TRUE) : ?>
							<div class="datos">A Convenir</div>
<?php else : ?>
							<div class="datos">&dollar; <?php echo number_format($vacante->vcnt_sueldo,2); ?> MXN Mensuales</div>
<?php endif; ?>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Categoria:</div>
							<div class="datos"><?php echo $vacante->vcnt_categoria; ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Tipo de Contrato:</div>
							<div class="datos"><?php echo $vacante->vcnt_contrato; ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Ubicación:</div>
							<div class="datos"><?php echo $vacante->vcnt_ciudad . ', ' . $vacante->vcnt_estado; ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Experiencia requerida:</div>
							<div class="datos"><?php echo $vacante->vcnt_experiencia; ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Número de vacantes:</div>
							<div class="datos"><?php echo $vacante->vcnt_cantidad; if ($vacante->vcnt_cantidad>1) { echo ' vacantes'; } else { echo ' vacante'; } ?></div>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Nivel de estudios requerido:</div>
							<div class="datos">Educación <?php echo $vacante->vcnt_educacion; ?> o superior.</div>
<?php if (!empty($vacante->vcnt_idiomas)) : ?>
							<div class="clearfix">&nbsp;</div>
							<div class="encabezado">Idioma requerido:</div>
							<div class="datos"><?php echo $vacante->vcnt_idiomas; ?></div>
<?php endif; ?>
						</div>
						<div id="sidebar-postulate" class="well">
							<h2>Postulate</h2>
							<div class="datos">Lorem ipsum Quis sit Excepteur ad ullamco minim sint id ullamco sit est consectetur in.</div>
						</div>
					</div>

			</div>
		</div>

	</div>

<!--Fin Vacante-->
