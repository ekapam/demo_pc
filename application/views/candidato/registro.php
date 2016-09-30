		<div class="container registro_cnd">
			<div class="col-lg-10">
				<h1>Beneficios de subir tu CV</h1>
				<ul class="list-unstyled">
					<li class="list-unstyled-item">Registro gratuito</li>
					<li class="list-unstyled-item">Busqueda de vacantes gratuita</li>
				</ul>
			</div>
			<div class="col-lg-10">
				<h2>Sube tu currículum gratis</h2>
				<p>¿Ya estás registrado?, <a href="candidato/registro">Accede aquí</a>.</p>
				<?php $fattr = array('class' => 'form-signin'); echo form_open('candidato/registro', $fattr); ?>
				<div class="form-group">
					<?php echo form_input(array('name'=>'firstname', 'id'=> 'firstname', 'placeholder'=>'Nombre(s)', 'class'=>'form-control', 'value' => set_value('firstname'))); ?>
					<?php echo form_error('firstname');?>
				
				</div>
				<div class="form-group">
					<?php echo form_input(array('name'=>'lastname', 'id'=> 'lastname', 'placeholder'=>'Apellidos', 'class'=>'form-control', 'value'=> set_value('lastname'))); ?>
					<?php echo form_error('lastname');?>
				
				</div>
				<div class="form-group">
					<?php echo form_input(array('name'=>'email', 'id'=> 'email', 'placeholder'=>'Email', 'class'=>'form-control', 'value'=> set_value('email'))); ?>
					<?php echo form_error('email');?>
				
				</div>
				<?php echo form_submit(array('value'=>'Crear cuenta', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
				<?php echo form_close(); ?>
				<p><br>Al hacer clic en "Crear cuenta", aceptas las <a href="candidato/aviso">Condiciones legales</a> y la <a href="candidato/privacidad">Política de privacidad</a>.</p>
				<div>&nbsp;</div>
				<div class="g-signin2" data-onsuccess="onSignIn"></div>
			</div>
		</div>