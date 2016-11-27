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

const EDIT_TEMPLATE = '<form id="bookmark_add_form" method="post" action="/bookmarks"> \
        <div id="name-form-group" class="form-group"> \
            <label for="nameField">Name</label> \
            <input name="name" id="nameField" type="text" class="form-control" placeholder="nombre" value={{name}}> \
        </div> \
        </br> \
        <div id="link-form-group" class="form-group"> \
            <label for="linkField">Link</label> \
            <input name="link" id="linkField" type="text" class="form-control" placeholder="http://example.com" value={{link}}> \
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
