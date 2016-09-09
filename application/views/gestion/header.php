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
	<meta name="robots" content="noindex, nofollow">
	<base href="<?php echo site_url(); ?>" />
	<link rel="icon" href="assets/favicon.ico">

	<!-- jQuery -->
	<script src="//code.jquery.com/jquery-2.1.0.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script type="text/javascript">$(window).load(function () { $('#page-loader').fadeOut(500); });</script>

	<!-- CSS -->
	<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
	<style type="text/css">
		#page-loader { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1000;background: #FFF none repeat scroll 0% 0%; z-index: 99999; }
		#page-loader .preloader-interior { display: block; position: relative; left: 50%; top: 50%; width: 150px; height: 150px; margin: -75px 0 0 -75px; border-radius: 50%; border: 3px solid transparent; border-top-color: #00ADEE; -webkit-animation: spin 2s linear infinite; animation: spin 2s linear infinite; }
		#page-loader .preloader-interior:before { content: ""; position: absolute; top: 5px; left: 5px; right: 5px; bottom: 5px; border-radius: 50%; border: 3px solid transparent; border-top-color: #9FCB3B; -webkit-animation: spin 3s linear infinite; animation: spin 3s linear infinite; }
		#page-loader .preloader-interior:after { content: ""; position: absolute; top: 15px; left: 15px; right: 15px; bottom: 15px; border-radius: 50%; border: 3px solid transparent; border-top-color: #F68428; -webkit-animation: spin 1.5s linear infinite; animation: spin 1.5s linear infinite; }
		@-webkit-keyframes spin { 0% { -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg); } }
		@keyframes spin { 0% { -webkit-transform: rotate(0deg); -ms-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -ms-transform: rotate(360deg); transform: rotate(360deg); } }
		body > div.bg-warning.container.flash-message {
			padding: 15px 10px;
			border: 1px solid #E9E2C0;
			border-radius: 4px;
			width: 80%;
			margin: 0 auto;
			display: block;
		}
	</style>
</head>
<body>
	<div id="page-loader"><span class="preloader-interior"></span></div>
	&nbsp;
<?php $arr = $this->session->flashdata(); if(!empty($arr['flash_message'])) { $html = '<div class="bg-warning container flash-message">'; $html .= $arr['flash_message']; $html .= '</div>'; echo $html; } ?>
