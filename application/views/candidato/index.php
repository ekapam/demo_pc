<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
<?php $data = $this->session->userdata; ?>
<br/>&nbsp;
<br/>&nbsp;
<br/>&nbsp;
<br/>&nbsp;
<br/>&nbsp;
		<div class="container candidato">
			<div class="col-lg-7">
				<div class="well">
					<p><strong><?php echo $data['cnd_first_name']." ".$data['cnd_last_name']; ?></strong></p>

				</div>
			</div>
			<div class="col-lg-13">
				<pre><?php print_r($data); ?></pre>
			</div>
		</div>
