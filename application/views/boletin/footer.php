<?php defined('BASEPATH') OR exit('No direct script access allowed') ?>
<!-- Footer -->
    
    <script src="assets/wowbook/wow_book.js"></script>
    <script src="assets/js/boletin_helper.js"></script>
    
    <script type="text/javascript">
        $(function () {
            var $alto = (window.innerHeight-150);
            var bookOptions = {
                width: 2318
                , height: 1500
                // , maxHeight : $alto
                , centeredWhenClosed: true
                , hardcovers: true
                , pageNumbers: false
                , toolbar: "back, next, zoomin, zoomout, fullscreen, regresa"
                , responsiveHandleWidth : 50
                , container: window
                , containerPadding: "0px"
                , toolbarPosition: "top"
                , mouseWheel: "zoom"

                , onFullscreenError: function () {
                    if (self !== top)
                        return "The frame is blocking full screen mode. Click on 'remove frame' button above and try to go full screen again.";
                    }
                };

            $('#pagina').wowBook(bookOptions);
            var book=$.wowBook("#pagina");
        });
    </script>

</body>
</html>