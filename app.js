// PORTFOLIO

var express = require("express");
var app = express();

app.set("view engine", "ejs");


// ********** ROUTES **********


// Home ROUTE
app.get("/",function(req,res){
    res.render("home");
});

// ABOUT ROUTE
app.get("/about",function(req,res){
    res.render("about");
});

// PROJECTS ROUTE
app.get("/projects",function(req,res){
    res.render("projects");
});

// LINKS ROUTE
app.get("/links",function(req,res){
    res.render("links");
});



// START SERVER
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Portfolio has started");
});
