<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="ES">
<![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8" lang="ES">
<![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="ES">
<![endif]-->
<!--[if lt IE 9]>
	<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js" lang="ES" xmlns="http://www.w3.org/1999/xhtml">
<!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php echo $titulo; ?></title>
	<meta name="description" content="">
	<base href="<?php echo site_url(); ?>" />
	<link rel="canonical" href="<?php echo base_url() . $this->uri->segment(1) . "/" . $this->uri->segment(2); ?>" />
	<link rel="icon" href="assets/favicon.ico">

	<!-- Bootstrap -->
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/css/bootstrap-theme.min.css" rel="stylesheet">

	<!-- CSS -->
	<style type="text/css">
	#outdated{display:none;position:fixed;top:35%;left:0;width:100%;height:30%;text-align:center;z-index:9999;background-color:#f25648;color:#fff}* html #outdated{position:absolute}#outdated h6{font-size:2em;line-height:1em;margin:25px 0 10px;text-transform:uppercase}#outdated p{font-size:1.1em;line-height:1.1em;margin:0}#outdated #btnUpdateBrowser{display:block;position:relative;padding:10px 0;margin:30px auto;width:260px;color:#fff;text-decoration:none;border:2px solid #fff;cursor:pointer}#outdated #btnUpdateBrowser:hover{color:#f25648;background-color:#fff}#outdated .last{position:absolute;top:10px;right:25px;width:20px;height:20px}#outdated #btnCloseUpdateBrowser{display:block;position:relative;width:100%;height:100%;text-decoration:none;color:#fff;font-size:36px;line-height:36px}
	#page-loader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000;background: #FFF none repeat scroll 0% 0%; z-index: 99999; }
	#page-loader .preloader-interior { display: block; position: relative; left: 50%; top: 50%; width: 150px; height: 150px; margin: -75px 0 0 -75px; border-radius: 50%; border: 3px solid transparent; border-top-color: #00ADEE; -webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite; }
	#page-loader .preloader-interior:before { content: ""; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px; border-radius: 50%; border: 3px solid transparent; border-top-color: #9FCB3B; -webkit-animation: spin 3s linear infinite; animation: spin 3s linear infinite; }
	#page-loader .preloader-interior:after { content: ""; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; border-radius: 50%; border: 3px solid transparent; border-top-color: #F68428; -webkit-animation: spin 1.5s linear infinite; animation: spin 1.5s linear infinite; }
	@-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg); } }
	@keyframes spin { 0% { -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg); } }
	</style>

	<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.1/animate.min.css">
	<link rel="stylesheet" href="assets/css/demo.css">

<?php if (isset($calendario) && $calendario == TRUE) : ?>
	<!-- jQuery Calendar -->
	<link rel="stylesheet" href="assets/css/calendar.css">
<?php endif; if(isset($gapi) && $gapi ==  TRUE) : ?>
	<!-- Google API -->
	<meta name="google-signin-scope" content="profile email">
	<meta name="google-signin-client_id" content="552716568155-u53glfqturjkuksaqqohnt1vv6in00ps.apps.googleusercontent.com">
<?php endif; ?>

</head>

<body>

	<div id="outdated">
		<h6>Su navegador esta desactualizado!</h6>
		<p>Le recomendamos actualizar su navegador para mostrar correctamente en este sitio. <a id="btnUpdateBrowser" href="https://www.google.com.mx/search?q=navegadores">Actualizar mi navegador ahora </a></p>
		<p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
	</div>

	<div id="page-loader"><span class="preloader-interior"></span></div>

<!-- Header -->
