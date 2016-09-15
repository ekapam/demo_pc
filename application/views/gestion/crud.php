<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html>
<head>
	<title><?php if(isset($titulo)) { echo $titulo; } ?></title>
	<base href="<?php echo site_url(); ?>" />
	<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php foreach($salida['css_files'] as $file): ?>
	<link type="text/css" rel="stylesheet" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach($salida['js_files'] as $file): ?>
	<script src="<?php echo $file; ?>"></script>
<?php endforeach; ?>
	<style type="text/css">
	.container.gestion { margin-top: 65px; }
	.navbar-brand { padding: 15px 0px; }
	</style>
</head>
<body>
<?php if(isset($menu)) { echo $menu; } ?>
	<div class="container gestion">
		<div class="row">
<?php echo $salida['output']; ?>
		</div>
    </div>
</body>
</html>
