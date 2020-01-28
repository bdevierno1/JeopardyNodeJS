var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static("public"));
var solution = [];

app.get("/results", function(req, res){
  var query = req.query.answer;
  solution.push(JSON.stringify(query));
  res.render("results" , {solution: solution})
});


app.get("/", function(req, res){
   var url = "http://www.jservice.io/api/random"
   request(url, function(error, response, body){
       if(!error && response.statusCode == 200) {
           var random = JSON.parse(body);
           solution = [];
           solution.push(JSON.stringify(random[0].answer));
           res.render("search" , {random: random})
       }
   });
});



app.listen(3000, function(){
  console.log("Somone made a connection");
});
