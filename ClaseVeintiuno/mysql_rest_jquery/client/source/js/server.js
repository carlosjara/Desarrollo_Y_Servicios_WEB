
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


