        <div class="container">
            <div class="col-lg-6 col-lg-offset-3">
                <h2>Acceso de gestores</h2>
                &nbsp;
                <?php $fattr = array('class' => 'form-signin'); echo form_open(site_url('gestion/acceso/'), $fattr); ?>
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
                &nbsp;
                <p>Click <a href="<?php echo site_url('gestion/restablecer'); ?>">aqui</a> si necesitas restablecer tu password.</p>
            </div>
        </div>