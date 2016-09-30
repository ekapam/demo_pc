<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

	</div>
	
	<!-- jQuery -->
	<script src="//code.jquery.com/jquery-2.1.0.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
	<script type="text/javascript">$(window).load(function () { $('#page-loader').fadeOut(500); });</script>
	
	<!-- OutDatedBrowser -->
	<script src="assets/js/outdatedbrowser.min.js" type="text/javascript"></script>
	<script>
		//event listener form DOM ready
		function addLoadEvent(func) {
			var oldonload = window.onload;
			if (typeof window.onload != 'function') {
				window.onload = func;
			} else {
				window.onload = function() {
					if (oldonload) {
						oldonload();
					}
					func();
				}
			}
		}
		//call function after DOM ready
		addLoadEvent(function(){
			outdatedBrowser({
				bgColor: '#f25648',
				color: '#ffffff',
				lowerThan: 'transform'
			})
		});

	</script>
	
	<?php if(isset($js)) : ?><script src="assets/js/candidato/<?php echo $js; ?>"></script><?php endif; ?>
	<script type="text/javascript">

	$.fn.minimize = function () {
		$.each(this, function () {
			var split = this.value.split(' ');
			for (var i = 0, len = split.length; i < len; i++) {
				split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1).toLowerCase();
			}
			this.value = split.join(' ');
		});
		return this;
	};

	var cadena = ["firstname","lastname"];
	$.each(cadena, function(k,v){
		$("#"+v).blur(function() {$("#"+v).minimize();});
	});

	$("#email").blur(function(){
		$("#email").val($("#email").val().toLowerCase());
	});

	</script>
</body>
</html>