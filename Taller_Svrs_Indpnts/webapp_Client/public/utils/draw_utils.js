//Draw Functions
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
      deleteOne(id);
    });
    $(".edit_button").click(function(){
      var id = $(this).data("id");
      drawEditPage(id);
    });
  });
}

function drawEditPage(id,name,link){
  getOne(id,function(element){
    $('#header').empty();
    var EDIT_TEMPLATE_rplcd = replaceOne(EDIT_TEMPLATE,element);
    $('#container').html(EDIT_TEMPLATE_rplcd);
    $("#save_button").click(function(){
        var name = $("#nameField").val();
        var link = $("#linkField").val();
        updateOne(id,name,link);

    });
  });
}

function drawNewPage(){
  $('#header').empty();
  $('#container').html(NEW_TEMPLATE);
  $("#save_button").click(function(){
      newOne();
  });
}