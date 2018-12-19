// PORTFOLIO

var express = require("express");
var app = express();

app.set("view engine", "ejs");

// ROOT ROUTE
app.get("/",function(req,res){
    res.render("home");
});

// SECOND ROUTE
app.get("/second",function(req,res){
    res.render("second");
});

// START SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Portfolio has started");
});
