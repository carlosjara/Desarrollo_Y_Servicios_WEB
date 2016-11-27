var myApp = new Framework7();

var $$ = Dom7;

$$('.open-login').on('click', function () {
  myApp.loginScreen();
});

$$('.close-login').on('click', function () {
  myApp.loginScreen();
});

$$('.form-to-json').on('click', function(){
  var formData = myApp.formToJSON('#my-form');
  alert(JSON.stringify(formData));
}); 

$$('.form-from-json').on('click', function(){
 
  var formData = {
    'name': 'Carlos',
    'email': 'ceja0919@gmail.com'
  }
  myApp.formFromJSON('#my-form', formData);
});  