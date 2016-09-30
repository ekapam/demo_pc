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
	span.required { color:#d80e18; }
	.form-group.separador_dg_form_group { padding: 10px; margin: 0 -10px 20px -10px; background-color: #18A245; }
	.form-group.separador_req_form_group { padding: 10px; margin: 0 -10px 20px -10px; background-color: #006495; }
	#label_separador_dg, #label_separador_req { font-size: 1.3em; padding: 0; color:#fff; font-weight: bold; padding-right: 20px; }
	#column_vcnt_id, #column_vcnt_status { width: 50px; }
	#crudForm > div > div > div.pretty-radio-buttons > div.radio { display: inline-block; margin-right: 10px; }
	.form-control { display: inline-block; width: 50%; }
	#field-vcnt_cantidad { width: 55px; }
	#field-vcnt_fecha_contratacion { width: 280px; }
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
