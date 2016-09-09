<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>
	<script type="text/javascript">
	var LHCChatOptions = {};
	LHCChatOptions.opt = {widget_height:340,widget_width:300,popup_height:520,popup_width:500,domain:'demo'};
	(function() {
	var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
	var referrer = (document.referrer) ? encodeURIComponent(document.referrer.substr(document.referrer.indexOf('://')+1)) : '';
	var location  = (document.location) ? encodeURIComponent(window.location.href.substring(window.location.protocol.length)) : '';
	po.src = '//demo/chat/index.php/esp/chat/getstatus/(position)/bottom_right/(ma)/br/(check_operator_messages)/true/(top)/350/(units)/pixels/(leaveamessage)/true/(department)/0/1?r='+referrer+'&l='+location;
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
	})();
	</script>
