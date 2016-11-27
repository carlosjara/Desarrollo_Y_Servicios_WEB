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
const EDIT_TEMPLATE =
'<form id="bookmark_add_form" method="post" action="/bookmarks"> \
    <input type="hidden"  id="idField" name="id" value="{{id}}"> \
    <div id="name-form-group" class="form-group"> \
        <label for="nameField">Name</label> \
        <input name="name" id="nameField" type="text" class="form-control" placeholder="nombre" value="{{name}}" > \
    </div> \
    </br> \
    <div id="link-form-group" class="form-group"> \
        <label for="linkField">Link</label> \
        <input name="link" id="linkField" type="text" class="form-control" placeholder="http://example.com" value="{{link}}"> \
    </div> \
    </br> \
</form> \
<input type="submit" id="save_button" class="pull-right btn btn-primary" value="Save">';

const NEW_TEMPLATE =
'<form id="bookmark_add_form" method="post" action="/bookmarks"> \
    <div id="name-form-group" class="form-group"> \
        <label for="nameField">Name</label> \
        <input name="name" id="nameField" type="text" class="form-control" placeholder="nombre"> \
    </div> \
    </br> \
    <div id="link-form-group" class="form-group"> \
        <label for="linkField">Link</label> \
        <input name="link" id="linkField" type="text" class="form-control" placeholder="http://example.com"> \
    </div> \
    </br> \
</form> \
<input type="submit" id="save_button" class="pull-right btn btn-primary" value="Save">';


const LIST_TEMPLATE = '<ul class="list-group" id="container">  </ul>';

const LIST_ITEM_TEMPLATE =
'<li class="list-group-item"> \
    <div class="row"> \
        <div class="col-md-8"> \
            <a target="_blank" href="{{link}}">{{name}}</a> \
        </div> \
        <div class="col-md-4"> \
            <a data-id="{{id}}" class="delete-link action_button btn btn-danger btn-xs pull-right">remove</a> \
            <a data-id="{{id}}" class="edit-link action_button btn btn-success btn-xs pull-right">edit</a> \
        </div> \
    </div> \
</li>';

const HEADER_TEMPLATE =
    '<a type="button" id="add_button" class="btn btn-primary btn-sm">Add new </a>';

const BASE_REST = 'http://localhost:3000/'

/**
 * Perform a server request and callback after retrieve all elements. 
 */
function getAll(callback) {
    $.getJSON(BASE_REST + "rest/bookmarks" + '?callback=?', function (data) {
        callback(data);
    });
}

/**
 * Perform a server request and callback after retrieve single element. 
 */
function getById(id, callback) {
    $.ajax({
        url: BASE_REST + "rest/bookmarks/" + id +  '?callback=?',
        dataType: "jsonp",
        complete: function (data) {
            callback(data.responseJSON);
        }
    });
}

/**
 * Update the given the bookmark and callback after update record.. 
 * 
 */
function update(bookmark, callback) {
    $.ajax({
        url: BASE_REST + 'rest/bookmarks',
        method: 'PUT',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: bookmark,
        complete: function (result) {
            callback();
        }
    });
}

/**
 *  Perform a server request and removes the bookmark with the given id.
 */
function remove(id, callback) {
    var url = BASE_REST + 'rest/bookmarks/' + id;
    $.ajax({
        url: url,
        method: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        complete: function (result) {
            callback();
        }
    });
}

/**
 * add the given the bookmark and callback after perform operation. 
 * 
 */
function add(bookmark, callback) {
    $.ajax({
        url: BASE_REST + 'rest/bookmarks',
        method: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: bookmark,
        complete: function (result) {
            callback();
        }
    });
}



function replaceAll(str, model) {
    for (var key in model) {
        var rKey = "{{" + key + "}}";
        str = str.replace(new RegExp(rKey, 'g'), model[key]); 
    }

    return str;
}

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
