<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

	</div>

<?php if(isset($js)) : ?>
	<script src="assets/js/gestion/<?php echo $js; ?>"></script>
<?php endif; ?>
	<script type="text/javascript">
	$(document).ready(function() {
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
	});
	</script>
</body>
</html>