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
    
    <!-- jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    
    <script type="text/javascript">
        $(window).load(function () {
            $('#page-loader').fadeOut(500);
        });
    </script>

    <!-- Bootstrap -->
    <script async src="assets/js/bootstrap.min.js"></script>
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <link href="assets/css/bootstrap-theme.min.css" rel="stylesheet">

    <!-- SmartMenus -->
    <script src="assets/js/jquery.smartmenus.min.js"></script>
    <script src="assets/js/jquery.smartmenus.bootstrap.min.js"></script>
    <link href="assets/css/jquery.smartmenus.bootstrap.min.css" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/outdatedbrowser.min.css">
    <link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <link href="assets/css/animate.min.css" rel="stylesheet">
    <link href="assets/css/demo.css" rel="stylesheet">
    
</head>

<body onResize="checkWidth();">

    <div id="outdated">
        <h6>Su navegador esta desactualizado!</h6>
        <p>Le recomendamos actualizar su navegador para mostrar correctamente en este sitio. <a id="btnUpdateBrowser" href="https://www.google.com.mx/search?q=navegadores">Actualizar mi navegador ahora </a></p>
        <p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>
    </div>

    <div id="page-loader"><span class="preloader-interior"></span></div>

<!-- Header -->

<?php if(isset($menu)) { echo $menu; } ?>

    <div class="container bolsa">
        
<?php if(isset($banner)) { echo $banner; } ?>
