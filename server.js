var express = require("express");
var mysql = require('mysql');
var app = express();
var db = require("./models");

var PORT = process.env.PORT || 5000;

app.get('/', function(req, res){
   db.Users
   .findAll()
   .then(function(data){
       res.json(data);
   });
});


db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});