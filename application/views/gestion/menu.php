<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

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
                            <a class="navbar-brand" href="<?php echo site_url('candidato'); ?>">
                                <img src="assets/img/logo.png" alt="People Connection">
                            </a>
                        </div>
                        <div class="navbar-collapse collapse navbar-right">

                            <ul class="nav navbar-nav">
                                <li class="visible-xs-block"><a href="javascript:;"><i class="glyphicon glyphicon-user"></i> <?php $nombre = $_SESSION['gstr_first_name']." ".$_SESSION['gstr_last_name']; echo $nombre; ?></a></li>
                                <li><a href="candidato/postulaciones"><i class="glyphicon glyphicon-check"></i> Mis postulaciones</a></li>
                                <li><a href="candidato/cv"><i class="glyphicon glyphicon-list-alt"></i> Mi currículum</a></li>
                                <li><a href="candidato/buscar"><i class="glyphicon glyphicon-search"></i> Buscar ofertas</a></li>
                                <li><a href="candidato/config"><i class="glyphicon glyphicon-cog"></i> Configuración</a></li>
                                <li><a href="candidato/salir"><i class="glyphicon glyphicon-off"></i> Cerrar sesión</a></li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>
