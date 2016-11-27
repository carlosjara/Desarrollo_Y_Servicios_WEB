/**
* Validate input information and retrieve boolean
* representation validation return
**/
function isValid(name, email){
	var isValidName = name !== "";
	var isValidEmail = email !== "";

	return isValidName && isValidEmail;
}

$(document).ready(function() {
	$('#nameField').focusout(function() {
		var text = $('#nameField').val();
		if (text === "")
		{
			$('#nameField').css("border-color",'red');
		}
	});
	$('#nameField').keydown(function() {
		$(".alert").fadeOut("slow");
		var text = $('#nameField').val();
		if (text === "") {
			$('#nameField').css("border-color",'black');
		}
	});
	$("#submit").click(function(){
		var name = $('#nameField').val();
		var email = $('#emailField').val();
		if (isValid(name,email)) {
				$("#form").submit();
			}
		});
});