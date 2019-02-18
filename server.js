
var express = require("express"); 
const path = require('path');
const cfenv = require('cfenv');

var app  =  express(); 
var appEnv = cfenv.getAppEnv();
var port = process.env.port || 3000;

app.get("/getCall", function(req,res){ 
console.log("GET Method caled");
console.log(__dirname);

res.send("<h2>Welcome to Node JS express app</h2>"+appEnv.url+appEnv.port+port+process.env.LOGNAME+process.env.VCAP_SERVICES);

}).listen(9009);

//app.get("/html", function(req,res){
app.get("/mithuntechnologies", function(req,res){
    res.set("Content-Type","text/html");
    //res.contentType("html") ; 
    res.write("<h2>Welcome to Mithun Technologies</h2>");
    res.write("<h5>http://mithuntechnologies.co.in http://mithuntechnologies.com/ </h5>");
    //must end 
    res.end();
    
    });
    app.get("/jsonData", function(req,res){
        res.type('json');
        //res.type('application/json');
        //res.json({'name': 'Bhaskar Reddy L'});
        res.send({'name': 'Bhaskar Reddy'});
        
        });
app.get("/queryparam", function(req,res){
//res.send(req.query);
res.send(req.query.key + ": " + req.query.name);
});

app.get("/status-code-404", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(404);
      res.status(404).send('Sorry, we cannot find that!');
})

app.get("/status-code-500", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(500);
   res.status(500).send('Internal Server Error – custom message');
})

app.get('/redirect', function(req, res) {
    //Send status 302
    
        res.redirect('http://google.com');
    });
    

    




