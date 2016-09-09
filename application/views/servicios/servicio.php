<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<!-- Servicio -->

	<div class="container servicio">
		<div class="row text-center">
			<div class="col-lg-20">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
<?php if     ($codigo == "admon") : ?>
					<h1>Administación de Personal</h1>
					<p>Si la carga de trabajo rebasa la capacidad de tu área de Recursos Humanos, cuenta con nosotros.</p>
<?php elseif ($codigo == "busqueda") : ?>
					<h1>Búsqueda de Talento</h1>
					<p>Contamos con las herramientas y metodologías para reconocer su potencial profesional y humano.</p>
<?php elseif ($codigo == "capacitacion") : ?>
					<h1>Capacitación</h1>
					<p>Lorem ipsum Ea labore quis laborum sint Duis aliqua officia in incididunt exercitation fugiat veniam.</p>
<?php elseif ($codigo == "software") : ?>
					<h1>Software de Nómina</h1>
					<p>Lorem ipsum Ad consectetur officia irure officia laboris ex.</p>
<?php elseif ($codigo == "juridicos") : ?>
					<h1>Servicios Jurídicos</h1>
					<p>Lorem ipsum Cupidatat Excepteur laboris in labore irure exercitation ut nostrud voluptate incididunt ea.</p>
<?php endif; ?>
				</div>
			</div>
		</div>
		
		<div class="clearfix hidden-xs">&nbsp;</div> 

<?php if ($codigo == "admon") : ?>
		<div class="row">
			<div class="col-lg-5 col-md-5 col-sm-6">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
					<img class="img-responsive img-circle center-block" alt="Administración de Personal" src="assets/img/servicios/admon-personal.jpg">
				</div>
			</div>
			<div class="col-lg-15 col-md-15 col-sm-14">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
					<h2>Estamos para ayudarte a que te enfoques en las actividades que aportan más valor en tu compañía.</h2>
					<p class="label label-<?php echo $color;?>">Ventajas</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Reducción de las cargas de trabajo y procesos de nómina.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Actualización inmediata a las reformas en materia de trabajo.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Adaptación a los procesos y tiempos de tu empresa Nuestras facturas son deducibles al 100%</li>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="clearfix">&nbsp;</div>
		
		<div class="row text-justify">
			<div class="col-lg-13 col-md-13 col-sm-11">

				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
							<p class="text-justify">Te ayudamos para administrar a tu personal sin perder de vista su potencial humano. Estamos para ayudarte a que te enfoques en las actividades que aportan más valor en tu compañía. Lorem ipsum Nisi ut Duis dolor ut incididunt in quis ut ea sint sit dolore. Lorem ipsum Commodo occaecat laboris sit ex in consectetur dolor velit ut labore.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/tercerizacion.jpg" alt="Tercerización de Personal">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Tercerización de Personal</h3>
							<p>Lorem ipsum Ad ut in minim elit mollit commodo ut dolore. Lorem ipsum Laboris aute dolor reprehenderit irure nulla incididunt ea quis Ut.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>
				
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/contratacionPrueba.jpg" alt="Contratación a Prueba">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Contratación a Prueba</h3>
							<p>Lorem ipsum Cupidatat ex anim dolore qui aliqua tempor eu Excepteur laboris sunt ut aute. Lorem ipsum Aute dolore ad proident consectetur qui non fugiat proident.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/maquila.jpg" alt="Maquila de Nómina">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Maquila de Nómina</h3>
							<p>Lorem ipsum Fugiat enim reprehenderit id do sit Excepteur in sunt enim aute laborum. Lorem ipsum Excepteur nisi fugiat ut irure dolore Excepteur cillum ut velit esse sit.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
							<p class="text-justify">Te ayudamos para administrar a tu personal sin perder de vista su potencial humano. Estamos para ayudarte a que te enfoques en las actividades que aportan más valor en tu compañía.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

			</div>
<?php echo $contacto; ?>

		</div>

<?php elseif ($codigo == "busqueda") : ?>
		<div class="row">
			<div class="col-lg-5 col-md-5 col-sm-6">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
					<img class="img-responsive img-circle center-block" alt="Búsqueda de Talento" src="assets/img/servicios/busqueda-talento.jpg">
				</div>
			</div>
			<div class="col-lg-15 col-md-15 col-sm-14">
				<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
					<h2>Lorem ipsum Enim occaecat veniam sed et mollit.</h2>
					<p>Procesos</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Nulla est cillum ut cillum fugiat aute nulla occaecat esse do.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Quis quis ut ad nostrud in exercitation sint tempor mollit nulla.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Minim cupidatat eiusmod eu Duis nisi Duis laboris pariatur.</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="clearfix">&nbsp;</div>
		
		<div class="row">
			<div class="col-lg-13 col-md-13 col-sm-11">
				
				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.3s">
							<p class="text-justify">Lorem ipsum Labore qui ut ex nisi ut amet. Lorem ipsum Pariatur elit dolor laborum officia Duis officia officia sunt mollit amet. Lorem ipsum Occaecat reprehenderit deserunt ea sint Duis aliquip occaecat eu in. Lorem ipsum Nulla non magna ut proident laboris occaecat aliqua nulla dolor elit est eu. Lorem ipsum Deserunt mollit voluptate sed in dolore labore cupidatat.</p>
						</div>
					</div>
				</div>
				
				<div clasS="clearfix">&nbsp;</div>
				
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/reclutamiento.jpg" alt="Reclutamiento y Selección">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Reclutamiento y Selección</h3>
							<p class="text-justify">Lorem ipsum Sint commodo minim ullamco dolore commodo in ut mollit incididunt deserunt. Lorem ipsum Culpa reprehenderit irure sint aliquip in culpa sint sed proident.</p>
						</div>
					</div>
				</div>
				
				<div clasS="clearfix">&nbsp;</div>
				
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/headhunting.jpg" alt="Headhunting">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Headhunting</h3>
							<p class="text-justify">Lorem ipsum Sint commodo minim ullamco dolore commodo in ut mollit incididunt deserunt. Lorem ipsum Culpa reprehenderit irure sint aliquip in culpa sint sed proident.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/socioeconomicos.jpg" alt="Estudios Socioeconómicos">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Estudios Socioeconómicos</h3>
							<p class="text-justify">Lorem ipsum Irure occaecat nostrud deserunt tempor voluptate fugiat ea laboris do Duis Ut. Lorem ipsum In ea voluptate sunt aliqua velit velit id.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/psicometria.jpg" alt="Pruebas de Psicométria">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Pruebas de Psicométria</h3>
							<p class="text-justify">Lorem ipsum Ut non ut laboris dolor nulla Ut laborum adipisicing nulla pariatur. Lorem ipsum Nulla do exercitation deserunt ut sed consequat occaecat occaecat nisi deserunt amet nulla.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/deshonestidad.jpg" alt="Pruebas de Deshonestidad">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Pruebas de Deshonestidad</h3>
							<p class="text-justify">Lorem ipsum Sed laboris in dolor culpa cupidatat voluptate amet ad ut sed et quis. Lorem ipsum Sint do aliqua ut laborum qui esse dolor minim aliqua exercitation irure sit.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
							<p class="text-justify">Lorem ipsum Fugiat proident deserunt est ut elit tempor ad est elit quis. Lorem ipsum Amet ea in esse enim laborum do irure ex. Lorem ipsum Cupidatat nisi cillum nostrud fugiat laborum velit nostrud esse exercitation voluptate eu. Lorem ipsum Excepteur nisi mollit velit minim in veniam et incididunt ut eu elit deserunt.</p>
						</div>
					</div>
				</div>

				<div class="cleafix">&nbsp;</div>

			</div>
<?php echo $contacto; ?>

		</div>

<?php elseif ($codigo == "capacitacion") : ?>
		<div class="row">
			<div class="col-lg-5 col-md-5 col-sm-6">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
					<img class="img-responsive img-circle center-block" alt="Software de Nómina" src="assets/img/servicios/capacitacion.jpg">
				</div>
			</div>
			<div class="col-lg-15 col-md-15 col-sm-14">
				<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
					<div class="cleafix">&nbsp;</div>
					<h2>Elaboramos cursos, de acuerdo a tus necesidades</h2>
					<p class="text-justify">En People Connection sabemos que la capacitación y actualización constantes son las bases para alcanzar el éxito profesional y personal; es por ello que le ofrecemos a cada uno de nuestros clientes, la posibilidad de adquirir y perfeccionar sus conocimientos, poniéndose en manos de expertos.</p>
				</div>
			</div>
		</div>

		<div class="clearfix">&nbsp;</div>

		<div class="row">
			<div class="col-lg-13 col-md-13 col-sm-11">

				<!-- <div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.5s">
					<p class="text-justify">Potenciar el talento del Capital Humano es nuestra base para el desarrollo de cursos estratégicos que proporcionen las herramientas necesarias para aumentar el buen desempeño del individuos, atrayendo grandes beneficios a corto, mediano y largo plazo.</p>
					<p class="text-justify">Así mismo, elaboramos cursos de acuerdo a las necesidades del negocio de nuestros clientes, proporcionando asesoría e identificando las oportunidades de crecimiento su Capital Humano.</p>
					<p class="label label-primary">Expertos formando EXPERTOS en:</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Desarrollo Humano</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Capital Humano</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Calidad</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Contabilidad</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Team Building</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Legal</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Comunicación</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Y más...</li>
					</ul>
				</div> -->

				<div class="container-fluid">
					<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1s">
						<div class="page-header">
							<p class="label label-primary">Revisa los siguientes eventos:</p>
							<h3></h3>
						</div>

						<div>
							<div id="calendario"></div>

							<div class="clearfix">&nbsp;</div>

							<div class="form-inline text-center">
								<div class="btn-group">
									<button class="btn btn-primary" data-calendar-nav="prev"><< Anterior</button>
									<button id="mes_actual" class="btn" data-calendar-nav="today"></button>
									<button class="btn btn-primary" data-calendar-nav="next">Siguiente >></button>
								</div>
								<!-- &nbsp;&nbsp;&nbsp;
								<div class="btn-group">
									<button class="btn btn-warning" data-calendar-view="year">Año</button>
									<button class="btn btn-warning active" data-calendar-view="month">Mes</button>
									<button class="btn btn-warning" data-calendar-view="week">Semana</button>
									<button class="btn btn-warning" data-calendar-view="day">Día</button>
								</div> -->
							</div>
						</div>
					</div>
				</div>

				<div class="modal fade" id="events-modal">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
								<h3>Event</h3>
							</div>
							<div class="modal-body" style="height: 400px">
								<p>Fecha: </p>
								<p>Lorem ipsum Enim Excepteur anim tempor in laboris incididunt id anim enim elit. Lorem ipsum Laborum officia sit nulla veniam dolor velit tempor Duis aute.</p>
							</div>
							<div class="modal-footer">
								<a href="#" data-dismiss="modal" class="btn">Close</a>
							</div>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="row">
					<div class="col-lg-5 col-md-5 col-sm-5">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
							<a href="javascript:;">
								<img class="img-circle img-responsive center-block" src="assets/img/micrositios/micrositio001.jpg" alt="Banner Micrositio 001">
							</a>
						</div>
					</div>
					<div class="col-lg-15 col-md-15 col-sm-15">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s">
							<h2>Taller de Integración y Trabajo en Equipo</h2>
							<p>Lorem ipsum Enim esse id mollit sunt pariatur sint exercitation. Lorem ipsum Quis enim ut Duis ex eu cupidatat aute dolore incididunt commodo Ut.</p>
							<p><a href="javascript:;">Lorem ipsum this.</a></p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="row">
					<div class="col-lg-5 col-md-5 col-sm-5">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
							<a href="javascript:;">
								<img class="img-circle img-responsive center-block" src="assets/img/micrositios/micrositio002.jpg" alt="Banner Micrositio 002">
							</a>
						</div>
					</div>
					<div class="col-lg-15 col-md-15 col-sm-15">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
							<h2>Capacitación Jurídica para Emprendedores</h2>
							<p>Lorem ipsum Enim esse id mollit sunt pariatur sint exercitation. Lorem ipsum Quis enim ut Duis ex eu cupidatat aute dolore incididunt commodo Ut.</p>
							<p><a href="javascript:;">Lorem ipsum this.</a></p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

			</div>

<?php echo $contacto; ?>

		</div>

<?php elseif ($codigo == "software") : ?>
		<div class="row">
			<div class="col-lg-5 col-md-5 col-sm-6">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
					<img class="img-responsive img-circle center-block" alt="Software de Nómina" src="assets/img/servicios/software.jpg">
				</div>
			</div>
			<div class="col-lg-15 col-md-15 col-sm-14">
				<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.2s">
					<h2>Lorem ipsum Enim occaecat veniam sed et mollit.</h2>
					<p>Procesos</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Nulla est cillum ut cillum fugiat aute nulla occaecat esse do.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Quis quis ut ad nostrud in exercitation sint tempor mollit nulla.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Minim cupidatat eiusmod eu Duis nisi Duis laboris pariatur.</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="clearfix">&nbsp;</div>

		<div class="row">
			<div class="col-lg-13 col-md-13 col-sm-11">

				<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.5s">
					<p class="text-justify">Lorem ipsum Labore qui ut ex nisi ut amet. Lorem ipsum Pariatur elit dolor laborum officia Duis officia officia sunt mollit amet. Lorem ipsum Occaecat reprehenderit deserunt ea sint Duis aliquip occaecat eu in. Lorem ipsum Nulla non magna ut proident laboris occaecat aliqua nulla dolor elit est eu. Lorem ipsum Deserunt mollit voluptate sed in dolore labore cupidatat.</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Culpa eiusmod ut enim dolor aute in sit velit irure.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Cillum sint laborum dolor in irure nulla sint et nisi labore.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Lorem ipsum Adipisicing in in nostrud sit esse dolore in cupidatat.</li>
					</ul>
					<div class="clearfix visible-lg-block">&nbsp;</div>
					<p class="text-justify">Lorem ipsum Labore qui ut ex nisi ut amet. Lorem ipsum Pariatur elit dolor laborum officia Duis officia officia sunt mollit amet. Lorem ipsum Occaecat reprehenderit deserunt ea sint Duis aliquip occaecat eu in. Lorem ipsum Nulla non magna ut proident laboris occaecat aliqua nulla dolor elit est eu. Lorem ipsum Deserunt mollit voluptate sed in dolore labore cupidatat.</p>
				</div>

			</div>
<?php echo $contacto; ?>

		</div>

<?php elseif ($codigo == "juridicos") : ?>
		<div class="row">
			<div class="col-lg-5 col-md-5 col-sm-6">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.1s">
					<img class="img-responsive img-circle center-block" alt="Servicios Jurídicos" src="assets/img/servicios/juridicos.jpg">
				</div>
			</div>
			<div class="col-lg-15 col-md-15 col-sm-14">
				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
					<h2>Estamos para ayudarte a que te enfoques en las actividades que aportan más valor en tu compañía.</h2>
					<p>Ventajas</p>
					<ul class="list-unstyled">
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Reducción de las cargas de trabajo y procesos de nómina.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Actualización inmediata a las reformas en materia de trabajo.</li>
						<li class="list-group-item"><i class="fa fa-angle-right" aria-hidden="true"></i> Adaptación a los procesos y tiempos de tu empresa Nuestras facturas son deducibles al 100%</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="clearfix">&nbsp;</div>

		<div class="row">
			<div class="col-lg-13 col-md-13 col-sm-11">

				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
							<p class="text-justify">Lorem ipsum Non aliquip Excepteur sed sunt officia laborum ullamco quis enim. Lorem ipsum Enim irure nostrud Excepteur sed eu cillum deserunt anim.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/integracionProfesional.jpg" alt="Integración Profesional de Expedientes">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Integración Profesional de Expedientes</h3>
							<p class="text-justify">Lorem ipsum Irure ad proident est magna velit in Duis sit sint ullamco eu. Lorem ipsum Exercitation aliquip dolor proident consectetur dolor in.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/contratacionProfesional.jpg" alt="Contratación Profesional de Colaboradores">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Contratación Profesional de Colaboradores</h3>
							<p class="text-justify">Lorem ipsum Deserunt consequat pariatur ex aliqua anim Excepteur. Lorem ipsum Veniam minim elit nostrud aliqua qui pariatur irure cupidatat cupidatat elit.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

				<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
					<div class="row">
						<div class="col-lg-5 col-md-5 col-sm-6 paddRCero">
							<img class="img-responsive img-circle center-block" src="assets/img/servicios/bajaProfesional.jpg" alt="Baja Profesional de Colaboradores">
						</div>
						<div class="col-lg-15 col-md-15 col-sm-14">
							<h3>Baja Profesional de Colaboradores</h3>
							<p class="text-justify">Lorem ipsum Consequat cupidatat sit sint in officia anim sit incididunt. Lorem ipsum Aliquip amet labore minim fugiat velit pariatur.</p>
						</div>
					</div>
				</div>
				
				<div class="clearfix">&nbsp;</div>
				
				<div class="row">
					<div class="col-lg-20">
						<div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
							<p class="text-justify">Lorem ipsum Exercitation dolore est reprehenderit enim irure elit cupidatat laboris consectetur Duis incididunt.</p>
						</div>
					</div>
				</div>

				<div class="clearfix">&nbsp;</div>

			</div>
<?php echo $contacto; ?>

		</div>

<?php endif; ?>
	</div>

<!--Fin Servicio-->
