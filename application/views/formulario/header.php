<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php echo $titulo; ?></title>
    <meta name="description" content="">
    <base href="<?php echo base_url(); ?>" />
    <link rel="icon" href="assets/favicon.ico">
    
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="assets/js/jquery.validate.min.js"></script>
    
    <!-- Modernizr -->
    <!-- <script src="assets/js/modernizr.custom.js" type="text/javascript"></script> -->
    
    <script type="text/javascript">
        $(window).load(function () {
            $('#page-loader').fadeOut(500);
        });
    </script>

    <!-- Bootstrap -->
    <script async src="assets/js/bootstrap.min.js"></script>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-theme.min.css" rel="stylesheet">
    
    <!-- CSS -->
    <link href="assets/css/demo.css" rel="stylesheet">

</head>
<body>
    <div id="page-loader"><span class="preloader-interior"></span></div>