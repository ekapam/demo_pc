            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-8 col-lg-offset-6">
                <h2>Bienvenido</h2>
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url('candidato/acceso/'), $fattr); ?>
                    <div class="form-group">
                        <?php echo form_input(array('name'=>'email', 'id'=> 'email', 'placeholder'=>'Email', 'class'=>'form-control', 'value'=> set_value('email'))); ?>
                        <?php echo form_error('email'); ?>

                    </div>
                    <div class="form-group">
                        <?php echo form_password(array('name'=>'password', 'id'=> 'password', 'placeholder'=>'Password', 'class'=>'form-control', 'value'=> set_value('password'))); ?>
                        <?php echo form_error('password'); ?>
                    
                    </div>
                    <?php echo form_submit(array('value'=>'Ingresar', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                <?php echo form_close(); ?>
                <p>&nbsp;</p>
                <p>Si no estas registrado, <a href="<?php echo site_url('candidato/registro');?>">haz click aquí para registrarte</a></p>
                <p>¿Has olvidado la contraseña? <a href="<?php echo site_url('candidato/recuperar'); ?>">Click aqui</a>.</p>
            </div>