var express = require('express');
var router = express.Router();


router.post('/',function(req,res){
	var data = req.body;
	var view = "welcome";
	data.hasErrors = false;
	if (data.name === "" || data.email === ""){
		view = 'form';
		data = {error : "Please fix errors", hasErrors:true, form_data: req.body};
	}
	res.render(view, data);
});

router.get('/',function(req,res){
	res.render('form');
});


module.exports = router;