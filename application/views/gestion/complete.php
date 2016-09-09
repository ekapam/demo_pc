            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-6 col-lg-offset-3">
                <h2>Confirmar registro</h2>
                <p>Hola <span><?php echo $firstName; ?></span>, para terminar de registrarte es necesario establecer una contraseña.</p>
                <small><strong>Tu contraseña debe conterner una Mayúscula y ser de al menos 8 caractéres.</strong></small>
                <p>&nbsp;</p>
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url().'gestion/confirmar/token/'.$token, $fattr); ?>
                <div class="form-group">
                    <?php echo form_password(array('name'=>'password', 'id'=> 'password', 'placeholder'=>'Password', 'class'=>'form-control', 'value' => set_value('password'))); ?>
                    <?php echo form_error('password') ?>

                </div>
                <div class="form-group">
                    <?php echo form_password(array('name'=>'passconf', 'id'=> 'passconf', 'placeholder'=>'Repite tu Password', 'class'=>'form-control', 'value'=> set_value('passconf'))); ?>
                    <?php echo form_error('passconf') ?>
                
                </div>
                    <?php echo form_hidden('gestor_id', $gestor_id);?>
                    <?php echo form_submit(array('value'=>'Confirmar', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                <?php echo form_close(); ?>

            </div>