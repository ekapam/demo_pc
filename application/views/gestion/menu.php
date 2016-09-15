<?php defined('BASEPATH') OR exit('No direct script access allowed'); $session = $this->session->userdata; ?>
	<div class="navbar-wrapper">
		<div class="container">
			<div class="navbar navbar-default navbar-fixed-top" role="navigation">
				<div id="menu-cabeza" class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="<?php echo site_url('gestion'); ?>">
							<img src="assets/img/logo-50.png" alt="" style="display:inline-block"> Gestion de Vacantes <small>Hola, <?php echo $session['gstr_first_name']; ?></small>
						</a>
					</div>
					<div class="navbar-collapse collapse navbar-right">

						<ul class="nav navbar-nav">
							<li><a href="gestion/"><i class="glyphicon glyphicon-check"></i> Mis vacantes</a></li>
							<li><a href="gestion/index/add"><i class="glyphicon glyphicon-pencil"></i> Publicar vacante</a></li>
							<li><a href="gestion/buscar"><i class="glyphicon glyphicon-search"></i> Buscar candidatos</a></li>
							<li><a href="gestion/config"><i class="glyphicon glyphicon-cog"></i> Configuración</a></li>
							<li><a href="gestion/salir"><i class="glyphicon glyphicon-off"></i> Cerrar sesión</a></li>
						</ul>

					</div>
				</div>
			</div>
		</div>
	</div>
