//Constants
const LIST_TEMPLATE = '<ul class="list-group" id="container-list"> </ul>';

const NEW_TEMPLATE = '<form id="bookmark_add_form" method="post" action="/bookmarks"> \
        <div id="name-form-group" class="form-group"> \
            <label for="nameField">Name</label> \
            <input name="name" id="nameField" type="text" class="form-control" placeholder="nombre"> \
        </div> \
        </br> \
        <div id="link-form-group" class="form-group"> \
            <label for="linkField">Link</label> \
            <input name="link" id="linkField" type="text" class="form-control" placeholder="http://example.com" > \
        </div> \
        </br> \
    </form> \
    <input type="submit" id="save_button" class="pull-right btn btn-primary" value="Save">';

const LIST_ITEM_TEMPLATE = '<li class="list-group-item">\
      <div class="row">\
          <div class="col-md-8"> \
              <a target="_blank" href="{{link}}">{{name}}</a> \
          </div> \
          <div class="col-md-4"> \
              <a data-id={{_id}} class="action_button btn btn-danger btn-xs pull-right remove_button">remove</a> \
              <a data-id={{_id}} class="action_button btn btn-success btn-xs pull-right edit_button">edit</a> \
          </div> \
      </div> \
  </li>';

const HEADER_TEMPLATE = '<a type="button" id="add_button" class="btn btn-primary btn-sm">Add new </a>';

//Functions
/**
* Perform a server request and callback after retrieve all elements.
*/
function getAll(callback){
  $.ajax({
    url: "rest/bookmarks",
    complete: function(data){
      callback(data.responseJSON);
    }
  });
}

function replaceAll(str, model){
  for(var key in model){
    var rKey = "{{"+ key + "}}";
    str = str.replace(new RegExp(rKey, 'g'),model[key]);
  }
  return str;
}
function drawAllPage(){
  getAll(function(elements){
    $('#header').html(HEADER_TEMPLATE);
    $('#container').html(LIST_TEMPLATE);

    $.each(elements, function(index,value){
      var newTemplate = replaceAll(LIST_ITEM_TEMPLATE,value);
      $('#container-list').append(newTemplate);
    });
    $("#add_button").click(function(){
      drawNewPage();
    });
    $(".remove_button").click(function(){
    var id = $(this).data("id");
    $.ajax({
      method: 'delete',
      url: '/rest/bookmarks/'+id,
      complete: function(){
        drawAllPage();      
      }
    });
  });
  });
}

function drawNewPage(){
  $('#header').empty();
  $('#container').html(NEW_TEMPLATE);
  $("#save_button").click(function(){
    $.ajax({
      contentType: 'application/json',
      dataType: 'json',
      method: 'post',
      url: '/rest/bookmarks',
      data : JSON.stringify({name: $('#nameField').val(), link: $('#linkField').val()}),
      complete: function(){
        drawAllPage();      
      }
    });
  });
}

//main
$(document).ready(function() {
    drawAllPage();
});
