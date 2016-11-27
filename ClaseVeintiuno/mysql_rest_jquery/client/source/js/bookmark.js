function removeBookmakr(id) {
    remove(id, drawAllPage);
}

function drawNewPage(id) {
    $('#header').empty();
    $('#container').html(NEW_TEMPLATE);

    $("#save_button").click(function() {
        if (validate()) {
            event.preventDefault();
        }

        var bookmark = JSON.stringify(
            {
                id:$('#idField').val(),
                link:$('#linkField').val(),
                name: $('#nameField').val()
            });

        add(bookmark, drawAllPage);
    });
}

function drawEditPage(id) {
    getById(id, function(bookmark) {
        $('#header').empty();
        $('#container').html(replaceAll(EDIT_TEMPLATE, bookmark));

        $("#save_button").click(function() {
            if (validate()) {
                event.preventDefault();
            }

            var bookmark = JSON.stringify({id:$('#idField').val(), link:$('#linkField').val(), name: $('#nameField').val()});
            update(bookmark, drawAllPage);
        });

    });
}

function drawAllPage() {
    getAll(function(elements) {
        $('#header').html(HEADER_TEMPLATE);
        $('#container').html(LIST_TEMPLATE);

        $.each(elements, function(index, value) {
            var newTemplate =  replaceAll(LIST_ITEM_TEMPLATE, value);
            $('#container').append(newTemplate);
        });

        $('.edit-link').click(function(){
            drawEditPage($(this).data('id'));
        });

        $('.delete-link').click(function(){
            removeBookmakr($(this).data('id'));
        });

        $('#add_button').click(function(){
            drawNewPage();
        });
    });
}

$(document).ready(function () {
    drawAllPage();
});