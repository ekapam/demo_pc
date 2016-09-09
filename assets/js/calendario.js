$(document).ready(function() {
    var date = new Date();
    var yyyy = date.getFullYear().toString();
    var mm = (date.getMonth()+1).toString().length == 1 ? "0"+(date.getMonth()+1).toString() : (date.getMonth()+1).toString();
    var dd  = (date.getDate()).toString().length == 1 ? "0"+(date.getDate()).toString() : (date.getDate()).toString();


    var options = {
        day: yyyy+"-"+mm+"-"+dd,
        view: "month",
        width: "100%",
        events_source: "eventos/getAll",
        language: "es-MX",
        weekbox: false,
        tmpl_path: "assets/tmpls/",
        tmpl_cache: false,
        time_start: "06:00",
        time_end: "22:00",
        time_split: "30",
        modal: "#events-modal",
        modal_type: "ajax",
        modal_title: function(event) { return event.title },
        onAfterEventsLoad: function(events) {
            if(!events) {
                return;
            }
            var list = $('#eventlist');
            list.html('');

            $.each(events, function(key, val) {
                $(document.createElement('li')).html('<a href="' + val.url + '">' + val.title + '</a>').appendTo(list);
            });
        },
        onAfterViewLoad: function(view) {
            $('.page-header h3').text(this.getTitle());
            $('#mes_actual').text(this.getTitle());
            $('.btn-group button').removeClass('active');
            $('button[data-calendar-view="' + view + '"]').addClass('active');
        }
    };

    var calendar = $('#calendario').calendar(options);

    $('.btn-group button[data-calendar-nav]').each(function() {
        var $this = $(this);
        $this.click(function() {
            calendar.navigate($this.data('calendar-nav'));
        });
    });

    $('.btn-group button[data-calendar-view]').each(function() {
        var $this = $(this);
        $this.click(function() {
            calendar.view($this.data('calendar-view'));
        });
    });
});