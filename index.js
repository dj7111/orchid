
var port = 3000;
var orm = require("orm");

orm.connect("mysql://root:ddd@localhost/orchid_2017", function (err, db) {
    if(err) throw err;
    //
    var tables = require(__dirname + "/lib/tables/tables.js");
    var tableObjects = {};
    for(name in tables) {
        tableObjects[name] = db.define(name, tables[name], {});
    }
     db.sync(function(err) {
            if (err) throw err;
    });
    //
    var dataRetriever = new require(__dirname + "/lib/data_retriever.js")();
    //
    var express = require('express');
    var app = express();
    app.use(express.static('public'));
    app.get('/api/1.0/get/:table/:id', function (req, res) {
        var id = req.params.id;
        var table = req.params.table;
        dataRetriever.getById(tableObjects[table], id, function(results){
            res.send(results);
        });
    });

    app.get('/api/1.0/find/offerings/byOrchidId/:id', function (req, res) {
        dataRetriever.getByFilter(tableObjects.offering, {orchidId:1}, function(results){
            res.send(results);
        });
    });

    //
    app.listen(port);
    console.log("Running server on port:", port);
    //
});

