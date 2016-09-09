<?php defined('BASEPATH') OR exit('No direct script access allowed'); ini_set('date.timezone', 'America/Mexico_City'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
	<div>
		<div>
			<img style="border: 0; -ms-interpolation-mode: bicubic; display: block; max-width: 208px" src="http://peopleconnection.mx/demo/assets/img/email/logo.png" alt="People Connection" width="208" height="125">
		</div>
		<p style="margin-top: 0; color: #444; font-family: sans-serif; font-size: 1em; line-height: 1.5em; margin-bottom: 25px">
			<strong>Mensaje de</strong>: <?php echo $nombre; ?><br>
			<strong>Email</strong>: <?php echo $email; ?><br>
			<strong>Teléfono</strong>: <?php echo $telefono; ?><?php if ($extension != "") :?>&nbsp;&nbsp;&nbsp;<strong>Ext</strong>:&nbsp;<?php echo $extension; ?><?php endif; ?><br>
			<strong>Sección</strong>: <?php echo base_url() . $this->uri->segment(1) . "/" . $this->uri->segment(2); ?><br>
			<strong>Fecha</strong>: <?php echo strftime("%d / %B / %Y", time()); ?><br>
			<strong>Hora</strong>: <?php echo mdate("%h:%i %a", time()); ?><br>
		</p> 
		<p style="margin-top: 0; color: #444; font-family: sans-serif; font-size: 1em; line-height: 1.5em; margin-bottom: 25px">
			<?php echo $mensaje; ?>
		</p>
	</div>
</body>
</html>