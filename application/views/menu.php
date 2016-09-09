<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!-- Menu -->

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
                        <a class="navbar-brand" href="<?php echo base_url(); ?>">
                            <img src="assets/img/logo.png" alt="People Connection">
                        </a>
                    </div>
                    <div class="navbar-collapse collapse navbar-right">

                        <ul class="nav navbar-nav">
                            <li class="hidden-xs hidden-sm hidden-md"><a href="<?php echo base_url(); ?>">Inicio</a></li>
                            <li><a href="conocenos">Conócenos</a></li>
                            <li class="dropdown"><a href="servicios">Servicios <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="servicios/administracion-de-personal">Administración de Personal</a></li>
                                    <li><a href="servicios/busqueda-de-talento">Búsqueda de Talento</a></li>
                                    <li><a href="servicios/capacitacion">Capacitación</a></li>
                                    <li><a href="servicios/software-de-nomina">Software de Nómina</a></li>
                                    <li><a href="servicios/juridicos">Servicios Jurídicos</a></li>
                                </ul>
                            </li>
                            <li><a href="boletin">Boletin Mensual</a></li>
                            <li class="dropdown">
                                <a href="bolsa-de-trabajo">Bolsa de Trabajo <span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="candidato/registro" class="alert alert-success"><i class="glyphicon glyphicon-cloud-upload"></i> Registra tu CV gratis</a></li>
                                    <li><a href="candidato/acceso"><i class="glyphicon glyphicon-user"></i> Accesa a tu Perfil</a></li>
                                </ul>
                            </li>
                            <li><a href="preguntas-frecuentes">Preguntas Frecuentes</a></li>
                            <li><a href="contacto">Contacto</a></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </div>
    
<!-- Fin Menu -->
