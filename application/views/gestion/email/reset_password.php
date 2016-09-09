<?php defined('BASEPATH') OR exit('No direct script access allowed'); ini_set('date.timezone', 'America/Mexico_City'); ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Notificación de cambio de password</title>
</head>
<body>
	<div>
		<div>
			<img style="border: 0; -ms-interpolation-mode: bicubic; display: block; max-width: 208px" src="http://peopleconnection.mx/demo/assets/img/email/logo.png" alt="People Connection" width="208" height="125">
		</div>
		<h1 style="margin-top: 0; color: #444; font-family: sans-serif; margin-bottom: 25px">Notificación de cambio de password</h1>
		<p style="margin-top: 0; color: #444; font-family: sans-serif; margin-bottom: 25px; font-weight: bold;">Hola <?php echo $para; ?>,</p>
		<p style="margin-top: 0; color: #444; font-family: sans-serif; font-size: 1em; line-height: 1.5em; margin-bottom: 25px">
			No te preocupes, pasa todo el tiempo, Haz solicitado restablecer tu password, si generaste este cambio, por favor haz click en el siguiente link:<br>
			<a href="<?php echo $url; ?>">Confirar cambio de password</a>.
		</p>
		<p style="margin-top: 0; color: #444; font-family: sans-serif; font-size: 1em; line-height: 1.5em; margin-bottom: 10px">
			Si el link no funciona, por favor copia y pega la siguiente URL en tu navegador:
		</p>
		<pre style="margin-top: 0; color: #444; margin-bottom: 30px"><?php echo $url; ?></pre>
		<p style="margin-top: 0; color: #444; font-family: sans-serif; font-size: 1em; line-height: 1.5em; margin-bottom: 25px">
			Esta URL caduca 1 hora después de su fecha de envío. La URL te dirige al sitio web de Gestor de Vacantes de People Connection, donde podrás introducir una nueva contraseña.<br/>&nbsp;<br/>
			<strong>En el caso de que tú hayas generado este cambio de password, ignora este mensaje, tu password se mantendrá sin cambios.</strong><br>
		</p>
	</div>
</body>
</html>