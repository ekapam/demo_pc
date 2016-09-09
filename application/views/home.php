<?php defined('BASEPATH') OR exit('No direct script access allowed'); setlocale(LC_ALL,"es_MX"); ?>
<!-- Home -->

    <div id="Carrusel" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner" role="listbox">

<?php echo $slide_random; ?>

<?php if ($no == 1) : ?>
<?php else : ?>

            <div id="slide01" class="item">
                <img class="full-width" src="assets/img/banner01.jpg" alt="Una buena elección te llevará al exito">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Una buena elección te llevará al exito</h1>
                        <p class="hidden-xs">Somos una empresa 100% mexicana, expertos en la administración eficiente del capital humano.</p>
                        <p><a id="btn-crsl01" class="btn btn-primary" href="conocenos" role="button">¿Quiénes somos?</a></p>
                    </div>
                </div>  
            </div>
<?php endif; ?>
<?php if ($no == 2) : ?>
<?php else : ?>

            <div id="slide02" class="item">
                <img class="full-width pull-right" src="assets/img/banner02.jpg" alt="Tu socio estratégico">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Tu socio estratégico</h1>
                        <p class="hidden-xs">Damos a nuestros clientes un soporte sólido de personal administrado.</p>
                        <p><a id="btn-crsl02" class="btn btn-primary" href="servicios" role="button">Nuestros Servicios</a></p>
                    </div>
                </div>
            </div>
<?php endif; ?>
<?php if ($no == 3) : ?>
<?php else : ?>

            <div id="slide03" class="item">
                <img class="full-width" src="assets/img/banner03.jpg" alt="Sube tu CV y obten tu empleo deseado">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Sube tu CV y encuentra el empleo deseado</h1>
                        <p class="hidden-xs">Registrate gratis, sube tu CV o busca dentro de nuestra:</p>
                        <p><a id="btn-crsl03" class="btn btn-primary" href="bolsa-de-trabajo" role="button">Bolsa de Trabajo</a></p>
                    </div>
                </div>
            </div>
<?php endif; ?>
<?php if ($no == 4) : ?>
<?php else : ?>

            <div id="slide04" class="item">
                <img class="full-width" src="assets/img/banner04.jpg" alt="Tu tienes la vacante, nosotros al candidato ideal">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Incorporamos el personal adecuado para su organización</h1>
                        <p class="hidden-xs">Tu tienes la vacante, nosotros al candidato ideal.</p>
                        <p><a id="btn-crsl04" class="btn btn-primary" href="servicios/reclutamiento-y-seleccion" role="button">Saber más</a></p>
                    </div>
                </div>
            </div>
<?php endif; ?>
<?php if ($no == 5) : ?>
<?php else : ?>

            <div id="slide05" class="item">
                <img class="full-width pull-right" src="assets/img/banner05.jpg" alt="Para apoyarte en la búsqueda del empleo en el que quieres desarrollarte">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Queremos estar a tu lado</h1>
                        <p class="hidden-xs">Para apoyarte en la búsqueda del empleo en el que quieres desarrollarte.</p>
                        <p><a id="btn-crsl05" class="btn btn-primary" href="bolsa-de-trabajo" role="button">Bolsa de Trabajo</a></p>
                    </div>
                </div>
            </div>
<?php endif; ?>
<?php if ($no == 6) : ?>
<?php else : ?>

            <div id="slide06" class="item">
                <img class="full-width pull-right" src="assets/img/banner06.jpg" alt="Atención para Empresas">
                <div class="container">
                    <div class="carousel-caption">
                        <h1>Atención para Empresas</h1>
                        <p class="hidden-xs">Encontrarás el candidato que estas buscando.</p>
                        <p><a id="btn-crsl06" class="btn btn-primary" href="contacto" role="button">Contactenos</a></p>
                    </div>
                </div>
            </div>
<?php endif; ?>

        </div>

        <a class="left carousel-control" href="#Carrusel" role="button" data-slide="prev">
            <span class="fa fa-angle-left" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
        </a>
        <a class="right carousel-control" href="#Carrusel" role="button" data-slide="next">
            <span class="fa fa-angle-right" aria-hidden="true"></span>
            <span class="sr-only">Siguiente</span>
        </a>
    </div>

    <div class="container home">

        <div class="row">
            <div class="col-lg-20">
                <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.6s">
                    <h1 class="text-center">Nuestros Servicios</h1>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-20">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                    <p class="text-justify">En People Connection nos distinguimos por ofrecerte una búsqueda especializada de talento, donde la situación y contexto empresarial de nuestros clientes son claves para encontrar los mejores talentos para potenciar tu empresa. Tomamos en cuenta objetivos y la Cultura Organizacional, así como los Valores y la Misión de cada empresa para garantizar la rápida adaptación del candidato a su entorno de trabajo.</p>
                </div>
            </div>
        </div>

        <div class="clearfix">&nbsp;</div>

        <div class="row text-center">
            <div class="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-1">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                    <a href="servicios/administracion-de-personal">
                        <img class="img-responsive img-circle center-block" src="assets/img/admon-personal.jpg" alt="Administración de Personal">
                    </a>
                    <h2>Administración de Personal</h2>
                    <p>Dedicados a la administración eficiente del capital humano, nuestras soluciones integrales se alinean a la estrategia de operación de nuestros clientes.</p>
                    <p><a class="btn btn-warning" href="servicios/administracion-de-personal" role="button">Ver detalles &raquo;</a></p>
                </div>
                <div class="clearfix visible-xs-block">&nbsp;</div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.7s">
                    <a href="servicios/busqueda-de-talento">
                        <img class="img-responsive img-circle center-block" src="assets/img/busqueda-talento.jpg" alt="Búsqueda de Talento">
                    </a>
                    <h2>Búsqueda de Talento</h2>
                    <p>Dedicados a la administración eficiente del capital humano, nuestras soluciones integrales se alinean a la estrategia de operación de nuestros clientes.</p>
                    <p><a class="btn btn-success" href="servicios/busqueda-de-talento" role="button">Ver detalles &raquo;</a></p>
                </div>
                <div class="clearfix visible-xs-block">&nbsp;</div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.9s">
                    <a href="servicios/capacitacion">
                        <img class="img-responsive img-circle center-block" src="assets/img/capacitacion.jpg" alt="Capacitación">
                    </a>
                    <h2>Capacitación<br class="hidden-xs">&nbsp;</h2>
                    <p>Dedicados a la administración eficiente del capital humano, nuestras soluciones integrales se alinean a la estrategia de operación de nuestros clientes.</p>
                    <p><a class="btn btn-primary" href="servicios/capacitacion" role="button">Ver detalles &raquo;</a></p>
                </div>
                <div class="clearfix visible-xs-block">&nbsp;</div>
            </div>
            <div class="col-lg-4 col-lg-offset-0 col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-4">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
                    <a href="servicios/software-de-nomina">
                        <img class="img-responsive img-circle center-block" src="assets/img/software.jpg" alt="Software de Nómina">
                    </a>
                    <h2>Software de Nómina</h2>
                    <p>Dedicados a la administración eficiente del capital humano, nuestras soluciones integrales se alinean a la estrategia de operación de nuestros clientes.</p>
                    <p><a class="btn btn-danger" href="servicios/software-de-nomina" role="button">Ver detalles &raquo;</a></p>
                </div>
                <div class="clearfix visible-xs-block">&nbsp;</div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
                    <a href="servicios/juridicos">
                        <img class="img-responsive img-circle center-block" src="assets/img/juridicos.jpg" alt="Servicios Jurídicos">
                    </a>
                    <h2>Servicios Jurídicos</h2>
                    <p>Dedicados a la administración eficiente del capital humano, nuestras soluciones integrales se alinean a la estrategia de operación de nuestros clientes.</p>
                    <p><a class="btn btn-purple" href="servicios/juridicos" role="button">Ver detalles &raquo;</a></p>
                </div>
                <div class="clearfix visible-xs-block">&nbsp;</div>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                <h1 class="text-center">Bolsa de Trabajo</h1>
                <div class="clearfix hidden-xs">&nbsp;</div>
            </div>
        </div>

        <div class="table-responsive">
            <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.7s">
                <table class="table table-striped table-hover table-condensed">
                    <thead>
                        <tr>
                            <th>Jornada:</th>
                            <th>Descripción:</th>
                            <th>Ubicación:</th>
                            <th>Fecha de Publicación:</th>
                        </tr>
                    </thead>
                    <tbody>
<?php foreach ($vacantes as $vac) : ?>
                        <tr>
                            <td><span class="label label-<?php if ($vac->vcnt_jornada == "Tiempo Completo") { echo "success"; } elseif ($vac->vcnt_jornada == "Medio Tiempo") { echo "primary"; } ?>"><?php echo $vac->vcnt_jornada; ?></span></td>
                            <td><a href="<?php echo site_url('bolsa-de-trabajo/vacante') . '/' . $vac->vcnt_id; ?>"><strong><?php echo $vac->vcnt_titulo; ?></strong><br/>People Connection</a></td>
                            <td><?php echo $vac->vcnt_ciudad; ?>,<br><?php echo $vac->vcnt_estado; ?></td>
                            <td><?php $fecha = strtotime($vac->vcnt_fecha); echo $dias[date('w',$fecha)].", ".date('d',$fecha)." / ".$meses[date('n',$fecha)]." / ".date('Y',$fecha); ?></td>
                        </tr>
<?php endforeach; ?>
                    </tbody>
                </table>
                <p class="text-right"><a href="bolsa-de-trabajo">Ver todas las vacantes disponibles</a></p>
            </div>
        </div>

        <hr>

        <div class="container-fluid">
            <div class="row">
                <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                    <h1 class="text-center">Boletín Mensual</h1>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-lg-1 col-md-1 col-sm-1">&nbsp;</div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.7s">
                        <a href="boletin/2016/febrero">
                            <img class="center-block" src="assets/img/boletin001.jpg" alt="Febrero">
                        </a>
                        <h3>Febrero</h3>
                        <p><a class="btn btn-default" href="boletin/2016/febrero" role="button">Leer &raquo;</a></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.9s">
                        <a href="boletin/2016/marzo">
                            <img class="center-block" src="assets/img/boletin002.jpg" alt="Marzo">
                        </a>
                        <h3>Marzo</h3>
                        <p><a class="btn btn-default" href="boletin/2016/marzo" role="button">Leer &raquo;</a></p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s">
                        <a href="boletin/2016/abril">
                            <img class="center-block" src="assets/img/boletin003.jpg" alt="Abril">
                        </a>
                        <h3>Abril</h3>
                        <p><a class="btn btn-default" href="boletin/2016/abril" role="button">Leer &raquo;</a></p>
                    </div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm-1">&nbsp;</div>
            </div>
            <div class="clearfix">&nbsp;</div>
            <div class="row">
                <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
                    <p class="text-center"><a class="btn btn-primary" href="boletin/2016/" role="button">Otras ediciones</a></p>
                </div>
            </div>
        </div>
    </div>

<!-- Fin Home -->
