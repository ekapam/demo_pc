<?php defined('BASEPATH') OR exit('No direct script access allowed') ?>
                
                <div class="col-lg-7 col-md-7 col-sm-9">
                    <div class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.3s">
        <?php echo $this->session->flashdata('msg'); ?>
                        <?php $attributes = array("id"=>"formuContacto", "class" => "form-horizontal"); echo form_open("formucontacto/mandar", $attributes);?>
                            <fieldset>
                                <p class="label label-<?php echo $color; ?>">Permitanos contactarle</p>
                                <p>Para obener una propuesta a su medida, ingrese sus datos en el siguiente formulario, nos pondremos en contacto con usted los más pronto posible.</p>
                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <label for="nombre" class="control-label">Nombre</label>
                                    </div>
                                    <div class="col-lg-20">
                                        <input class="form-control" name="nombre" placeholder="Su nombre completo" type="text" value="<?php echo set_value('nombre'); ?>" />
                                        <label class="error text-danger" for="nombre" generated="true"><?php echo form_error('nombre'); ?></label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <label for="email" class="control-label">Correo electrónico</label>
                                    </div>
                                    <div class="col-lg-20">
                                        <input class="form-control" name="email" placeholder="correo@dominio.com" type="text" value="<?php echo set_value('email'); ?>" />
                                        <label class="error text-danger" for="email" generated="true"><?php echo form_error('email'); ?></label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <label for="telefono" class="control-label">Teléfono</label>
                                    </div>
                                    <div class="col-lg-20">
                                        <input class="form-control" name="telefono" placeholder="Su teléfono" type="text" value="<?php echo set_value('telefono'); ?>" />
                                        <label class="error text-danger" for="telefono" generated="true"><?php echo form_error('telefono'); ?></label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <label for="asunto" class="control-label">Asunto</label>
                                    </div>
                                    <div class="col-lg-20">
                                        <input class="form-control" name="asunto" placeholder="Su asunto" type="text" value="<?php echo set_value('asunto'); ?>" />
                                        <label class="error text-danger" for="asunto" generated="true"><?php echo form_error('asunto'); ?></label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <label for="mensaje" class="control-label">Mensaje</label>
                                    </div>
                                    <div class="col-lg-20">
                                        <textarea class="form-control" name="mensaje" rows="4" placeholder="Su Mensaje"><?php echo set_value('mensaje'); ?></textarea>
                                        <label class="error text-danger" for="mensaje" generated="true"><?php echo form_error('mensaje'); ?></label>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <?php echo $recaptcha_html; ?>
                                    
                                    <br>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <div class="col-lg-20">
                                        <input name="enviar" id="enviar" type="submit" class="btn btn-<?php echo $color; ?>" value="Enviar" />
                                    </div>
                                </div>
                            </fieldset>
                        <?php echo form_close(); ?>                        
                    </div>
                </div>
                