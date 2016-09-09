            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-6 col-lg-offset-3">
                <h2>Restablecer password</h2>
                <p>Ingresa tu correo registrado, donde te enviaremos las instrucciones para restablecer tu password.</p>
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url().'gestion/restablecer/', $fattr); ?>
                <div class="form-group">
                    <?php echo form_input(array('name'=>'email', 'id'=> 'email', 'placeholder'=>'Email', 'class'=>'form-control', 'value'=> set_value('email'))); ?>
                    <?php echo form_error('email') ?>

                </div>
                    <?php echo form_submit(array('value'=>'Restablecer', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                    <?php echo form_close(); ?>    

            </div>