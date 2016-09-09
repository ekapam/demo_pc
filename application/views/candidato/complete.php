            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-8 col-lg-offset-6">
                <h2>Perfecto!</h2>
                <p>Hola <span><?php echo $firstName; ?></span>, para terminar de registrarte es necesario establecer una contraseña.</p>
                <small>Tu contraseña debe conterner una Mayúscula y ser de al menos 8 caractéres.</small>
                <p>&nbsp;</p>
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url().'candidato/confirmar/token/'.$token, $fattr); ?>
                <div class="form-group">
                    <?php echo form_password(array('name'=>'password', 'id'=> 'password', 'placeholder'=>'Contraseña', 'class'=>'form-control', 'value' => set_value('password'))); ?>
                    <?php echo form_error('password') ?>

                </div>
                <div class="form-group">
                    <?php echo form_password(array('name'=>'passconf', 'id'=> 'passconf', 'placeholder'=>'Repite tu contraseña', 'class'=>'form-control', 'value'=> set_value('passconf'))); ?>
                    <?php echo form_error('passconf') ?>
                
                </div>
                    <?php echo form_hidden('candidato_id', $candidato_id);?>
                    <?php echo form_submit(array('value'=>'Confirmar', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                <?php echo form_close(); ?>

            </div>