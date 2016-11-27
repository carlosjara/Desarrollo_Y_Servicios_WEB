$(document).ready(function() {
	$('#nameField').focusout(function() {
		var text = $('#nameField').val();
		if (text === "")
		{
			$('#nameField').css("border-color",'red');
		}
	});
	$('#nameField').keydown(function() {
		$('#nameField').css("border-color",'black');
	})
});