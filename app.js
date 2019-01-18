var express = require('express');

var app = express();

app.set('view engine' , 'ejs');
//Routes

//home
app.get('/', function(req, res){
  res.render('home');
});

app.listen(3000, function(){
  console.log("App is running on localhost:3000");
})