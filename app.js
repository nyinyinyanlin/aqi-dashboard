var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('<b>Hello World</b>');
});

app.listen(3000);
