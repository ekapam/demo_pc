            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-8 col-lg-offset-6">
                <h2>Restablecer contraseña</h2>
                <p>Por favor ingresa el email con que te registraste, donde te enviaremos las instrucciones para reestablecer tu contraseña</p>
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url().'candidato/restablecer/', $fattr); ?>
                <div class="form-group">
                    <?php echo form_input(array('name'=>'email', 'id'=> 'email', 'placeholder'=>'Email', 'class'=>'form-control', 'value'=> set_value('email'))); ?>
                    <?php echo form_error('email') ?>

                </div>
                    <?php echo form_submit(array('value'=>'Enviar', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                    <?php echo form_close(); ?>    

            </div>