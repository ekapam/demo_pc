            <div class="clearfix">&nbsp;</div>
            <div class="col-lg-6 col-lg-offset-3">
                <h2>Hola</h2>
                <p>Ingresa todos los siguientes datos obligatorios:</p>
                <?php $fattr = array('class' => 'form-signin'); echo form_open('gestion/registro', $fattr); ?>
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
                <?php echo form_submit(array('value'=>'Registrar', 'class'=>'btn btn-lg btn-primary btn-block')); ?>
                <?php echo form_close(); ?>
            
            </div>