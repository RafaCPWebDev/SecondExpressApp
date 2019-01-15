var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
   var sound = "";
   var animal = req.params.animal;
   
   switch (animal) {
       case 'pig':
           sound = "Oink";
           // code
           break;
       case 'cow':
           sound = "Moo";
           // code
           break;
       case 'dog':
           sound = "Woof Woof!";
           // code
           break;
       
       default:
           // code
   }
   res.send("The " + animal + " says '" + sound + "'"); 
});

app.get("/repeat/:word/:number", function(req, res){
   var phrase = "";
   for(var i = 0; i < req.params.number; i++){
       phrase += req.params.word + " ";
   }
    res.send(phrase); 
});

app.get("*", function(req, res){
   res.send("Page not found"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});