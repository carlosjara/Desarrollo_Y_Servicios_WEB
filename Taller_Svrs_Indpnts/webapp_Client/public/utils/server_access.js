/**
* Perform a server request and callback after retrieve all elements.
*/
function getAll(callback){
  $.ajax({
    url: "http://localhost:3000/rest/bookmarks",
    complete: function(data){
      callback(data.responseJSON);
    }
  });
}
function getOne(id,callback){
  $.ajax({
    url: "http://localhost:3000/rest/bookmarks/"+id,
    complete: function(data){
      callback(data.responseJSON);
    }
  });
}
function newOne(){
    $.ajax({
      contentType: 'application/json',
      dataType: 'json',
      method: 'post',
      crossDomain: true,
      url: 'http://localhost:3000/rest/bookmarks',
      data : JSON.stringify({name: $('#nameField').val(), link: $('#linkField').val()}),
      complete: function(){
        drawAllPage();      
      }
    });
}
function updateOne(_id,_name,_link){
  $.ajax({
      contentType: 'application/json',
      dataType: 'json',
      method: 'put',
      crossDomain: true,
      url: 'http://localhost:3000/rest/bookmarks/edit/'+_id,
      data : JSON.stringify({id: _id,name: _name, link: _link}),
      complete: function(){
        drawAllPage();      
      }
    });
}
function deleteOne(id){
  $.ajax({
      method: 'delete',
      crossDomain: true,
      url: 'http://localhost:3000/rest/bookmarks/'+id,
      complete: function(){
        drawAllPage();      
      }
    });
}