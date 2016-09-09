<!DOCTYPE html>
<html>
<head>
    <head>
        <title>Crear un nuevo evento</title>
        <meta charset="utf-8">
        <base href="<?php echo site_url(); ?>" />
        <link rel="canonical" href="<?php echo base_url() . $this->uri->segment(1) . "/" . $this->uri->segment(2); ?>" />
        <script src="//code.jquery.com/jquery-2.1.0.min.js"></script>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>
        
        <script src="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.0.0/js/bootstrap-datetimepicker.min.js"></script>
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datetimepicker/3.0.0/css/bootstrap-datetimepicker.min.css" />
        <script src="assets/js/bootstrap-datetimepicker.es.js"></script>
    </head>
</head>
<body>
    <div class="container">
        <ol class="breadcrumb">
            <li><a href="calendario">Calendario</a></li>
            <li><a href="eventos">Añadir evento</a></li>
        </ol>
        <div class="row">
            <h1 class="text-center heading">Añadir un nuevo evento</h1><hr>
            <?php echo form_open(base_url('eventos/save')) ?>
            <div class="col-sm-8 col-sm-offset-2" style="height:75px;">
                <div class='col-md-6'>
                    <div class="form-group">
                        <div class='input-group date' id='from'>
                            <input type='text' name="from" class="form-control" readonly />
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                        </div>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class="form-group">
                        <div class='input-group date' id='to'>
                            <input type='text' name="to" class="form-control" readonly />
                            <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="url" class="col-sm-12 control-label">Enlace al evento</label>
                    <div class="col-sm-12">
                        <input type="url" name="url" class="form-control" id="url" placeholder="Introduce una url o no :)">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-12 control-label">Tipo de evento</label>
                    <div class="col-sm-12">
                        <select class="form-control" name="class">
                            <option value="event-info">Info</option>
                            <option value="event-success">Success</option>
                            <option value="event-inverse">Inverse</option>
                            <option value="event-important">Important</option>
                            <option value="event-warning">Warning</option>
                            <option value="event-special">Special</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="title" class="col-sm-12 control-label">Título</label>
                    <div class="col-sm-12">
                        <input type="text" name="title" class="form-control" id="title" placeholder="Introduce un título">
                    </div>
                </div>
                <div class="form-group">
                    <label for="body" class="col-sm-12 control-label">Evento</label>
                    <div class="col-sm-12">
                        <textarea id="body" name="event" class="form-control" rows="3"></textarea>
                    </div>
                </div>

                <input style="margin-top: 10px" type="submit" class="pull-right btn btn-success" value="Gurdar evento">
            </div>
        </div>
        <?php echo form_close() ?>
    </div>
    <script type="text/javascript">
    $(function () {
        $('#from').datetimepicker({
            language: 'es',
            useCurrent: new Date(),
            defaultDate: new Date(),
            sideBySide: true,
            // daysOfWeekDisabled: '0-6'
        });
        $('#to').datetimepicker({
            language: 'es',
            defaultDate: new Date(),
            sideBySide: true
        });

    });
    </script>
</div>
</body>
</html>