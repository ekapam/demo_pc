<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html>
<head>
	<title><?php if(isset($titulo)) { echo $titulo; } ?></title>
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php foreach($salida['css_files'] as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($salida['js_files'] as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
</head>
<body>
<?php if(isset($_SESSION['gstr_email'])) : ?>
	<div class="container">
		<div class="row">
			<div class="clearfix">&nbsp;</div>
		    <h2>Gestion de Vacantes</h2>
		    <p>Hola, <?php echo $_SESSION['gstr_first_name']; ?></p>
		    <p><a href="<?php echo site_url('gestion/salir'); ?>">Logout</a></p>
		</div>
	</div>
<?php endif; ?>
	<div class="container">
		<div class="row">
<?php echo $salida['output']; ?>
		</div>
    </div>
</body>
</html>
