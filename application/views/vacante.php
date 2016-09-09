<?php defined('BASEPATH') OR exit('No direct script access allowed'); $datos = $vacante[0]; ?>
<!-- Vacante -->

    <div class="container conocenos">
        
        <div class="clearfix">&nbsp;</div>

        <div class="row">
            <div class="col-lg-20">
                    <ol class="breadcrumb">
                        <li><a href="<?php echo site_url('bolsa-de-trabajo'); ?>">Bolsa de Trabajo</a></li>
                        <li class="active"><?php echo $datos->titulo; ?></li>
                        <li id="regresar" class="pull-right"><a href="<?php echo site_url('bolsa-de-trabajo'); ?>">Regresar</a></li>
                    </ol>

                    <div class="col-lg-14 col-md-14 col-sm-13">
                        <div id="main-datos" class="well">
                            <h1><?php echo $datos->titulo; ?></h1>
                            <p><?php echo $datos->descripcion; ?></p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-7">
                        <div id="sidebar-datos" class="well">
                            <div class="encabezado">Tipo de Contratación:</div>
                            <div class="datos"><?php echo $datos->jornada; ?></div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Sueldo:</div>
                            <div class="datos">&dollar; <?php echo number_format($datos->sueldo,2); ?> MXN Mensuales</div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Categoria:</div>
                            <div class="datos"><?php //echo $datos->categoria; ?>Ventas</div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Sub-categoria:</div>
                            <div class="datos"><?php //echo $datos->subcategoria; ?>Gerencia</div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Ubicación:</div>
                            <div class="datos"><?php echo $datos->ciudad . ', ' . $datos->estado; ?></div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Experiencia requerida:</div>
                            <div class="datos"><?php echo $datos->experiencia; ?> o mas.</div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Nivel de estudios requerido:</div>
                            <div class="datos"><?php echo $datos->educacion; ?> o superior.</div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Idioma requerido:</div>
                            <div class="datos"><?php echo $datos->idioma; ?></div>
                            <div class="clearfix">&nbsp;</div>
                            <div class="encabezado">Fecha de Publicación:</div>
                            <div class="datos text-capitalize"><?php $fecha = strtotime($datos->fechaPublicacion); echo date('l d \d\e F \d\e\l Y', $fecha); ?></div>
                        </div>
                        <div id="sidebar-postulate" class="well">
                            <h2>Postulate</h2>
                            <div class="datos">Lorem ipsum Quis sit Excepteur ad ullamco minim sint id ullamco sit est consectetur in.</div>
                        </div>
                    </div>

            </div>
        </div>

    </div>


<!--Fin Vacante-->
