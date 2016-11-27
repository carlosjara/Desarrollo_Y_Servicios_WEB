function validate() {
    var name = $("#nameField").val();
    var link = $("#linkField").val();
    var hasErrors = false;

    if (!name.trim()) {
        hasErrors = true;
        $('#name-form-group').addClass('has-error');
        $('#name-form-group').append('<div id="name_error" class="help-block with-errors">Name field is mandatory</div>');
    }

    if (!link.trim()) {
        hasErrors = true;
        $('#link-form-group').addClass('has-error');
        $('#link-form-group').append('<div id="link_error" class="help-block with-errors">Link field is mandatory</div>');
    }

    return hasErrors;
}
