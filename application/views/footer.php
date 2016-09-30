<?php defined('BASEPATH') OR exit('No direct script access allowed') ?>
<!-- Footer -->
	<div class="container">

		<footer>

			<hr>

			<div class="row">
				<div class="col-lg-10 col-md-10 col-sm-10 paddingCero">
					<div class="col-lg-10 col-md-10 col-sm-10">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.5s">
							<!-- <img id="logo-footer" src="assets/img/logo-footer.png" alt="People Connection"> -->
							<!-- <p class="text-justify">Expertos en la administración eficiente del capital humano, ofreciendo siempre alternativas novedosas y flexibles.</p> -->
							<h3>Miembros de:</h3>
							<img class="img-responsive" src="assets/img/miembros.jpg" alt="Miembros">
						</div>
					</div>
					<div class="col-lg-10 col-md-10 col-sm-10">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="0.9s">
							<div class="text-left">
								<h3>Distinciones</h3>
								<img class="img-responsive" src="assets/img/distinciones.jpg" alt="Distinciones">
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-10 col-md-10 col-sm-10 paddingCero">
					<div class="col-lg-10 col-md-10 col-sm-10">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.1s">
							<div class="text-left">
								<h3>Contacto</h3>
								<p>Estamos cerca de ti, <a href="contacto">Ubica tu ciudad</a></p>
								<h3>Redes Sociales</h3>
								<p>Encuentranos en: <br class="hidden-lg hidden-xs">
									<a href="http://www.facebook.com/peopleconnection.mx" target="_blank"><i class="fa fa-facebook"></i></a>
									<a href="https://twitter.com/people_connecti" target="_blank"><i class="fa fa-twitter"></i></a>
									<a href="https://www.linkedin.com/company/people-connection-m-xico" target="_blank"><i class="fa fa-linkedin"></i></a>
									<a href="https://www.youtube.com/user/peopleconnectionmx" target="_blank"><i class="fa fa-youtube"></i></a>
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-10 col-md-10 col-sm-10 hidden-xs">
						<div class="wow fadeInDown" data-wow-duration="1s" data-wow-delay="1.3s">
							<h3 class="text-left">Servicios</h3>
							<ul class="list-unstyled">
								<li class="list-group-item"><a href="servicios/administracion-de-personal">Administración de Personal</a></li>
								<li class="list-group-item"><a href="servicios/busqueda-de-talento">Búsqueda de Talento</a></li>
								<li class="list-group-item"><a href="servicios/capacitacion">Capacitación</a></li>
								<li class="list-group-item"><a href="servicios/software-de-nomina">Software de Nómina</a></li>
								<li class="list-group-item"><a href="servicios/juridicos">Servicios Jurídicos</a></li>
							</ul>
						</div>
					</div>
				</div>

			</div>

			<hr>
			
			<p class="text-center">&copy; <?php echo date("Y"); ?> People Connection&reg; / <a href="aviso-de-privacidad">Aviso de Privacidad</a> / <a href="mapa-de-sitio">Mapa de Sitio</a></p>
		
		</footer>

	</div>

	<!-- jQuery -->
	<script src="//code.jquery.com/jquery-2.1.0.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script type="text/javascript">$(window).load(function () { $('#page-loader').fadeOut(500); });</script>
	
	<!-- OutDatedBrowser -->
	<script src="assets/js/outdatedbrowser.min.js" type="text/javascript"></script>
	<script>
		//event listener form DOM ready
		function addLoadEvent(func) {
			var oldonload = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = func;
			} else {
				window.onload = function() {
					if (oldonload) {
						oldonload();
					}
					func();
				}
			}
		}
		//call function after DOM ready
		addLoadEvent(function(){
			outdatedBrowser({
				bgColor: '#f25648',
				color: '#ffffff',
				lowerThan: 'transform'
			})
		});

	</script>
	<script src="assets/js/wow.min.js"></script>
<?php if (isset($validate) && $validate == TRUE) : ?>
	<script src="assets/js/jquery.validate.min.js"></script>
<?php endif; if (isset($calendario) && $calendario == TRUE) : ?>
	<script src="assets/js/underscore-min.js"></script>
	<script src="assets/js/calendar.js"></script>
	<script src="assets/js/language/es-MX.js"></script>
	<script src="assets/js/calendario.js"></script>
<?php endif; if (isset($form) && $form == TRUE) : ?>
	<script src="assets/js/jquery.form.js"></script>
<?php endif; if (isset($js)) :?>
	<script src="assets/js/<?php echo $js; ?>"></script>
<?php endif; if (isset($gmaps) && $gmaps == TRUE): ?>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcSErSYbQNU6C0qygJDepeO3I9Zd6wTLI&callback=initMap"></script>
<?php endif; if (isset($gapi) && $gapi == TRUE) : ?>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<script type="text/javascript">
		function onSignIn(googleUser) {
			// Useful data for your client-side scripts:
			var profile = googleUser.getBasicProfile();
			console.log("ID: " + profile.getId()); // Don't send this directly to your server!
			console.log('Full Name: ' + profile.getName());
			console.log('Given Name: ' + profile.getGivenName());
			console.log('Family Name: ' + profile.getFamilyName());
			console.log("Image URL: " + profile.getImageUrl());
			console.log("Email: " + profile.getEmail());

			// The ID token you need to pass to your backend:
			var id_token = googleUser.getAuthResponse().id_token;
			console.log("ID Token: " + id_token);
		};
	</script>
<?php endif; ?>
</body>
</html>