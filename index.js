
var port = 3000;
var orm = require("orm");

orm.connect("mysql://root:ddd@localhost/orchid_2017", function (err, db) {
  if(err) throw err;

    var tables = require(__dirname + "/lib/tables/tables.js");
    var tableObjects = {};
    for(name in tables) {
        tableObjects[name] = db.define(name, tables[name], {});
    }
     db.sync(function(err) {
            if (err) throw err;
    });
    var orchidRepo = new require(__dirname + "/lib/repos/orchid_repo.js")(db, tableObjects.orchid);

    //
    var express = require('express')
    var app = express()
    app.use(express.static('public'));
    app.get('/orchid/:id', function (req, res) {
        var id = req.params.id;
        if(id == "all") {
            orchidRepo.all(function(err, orchids){
                res.send(orchids);
            });
        } else {
            orchidRepo.getById(id, function(err, orchids){
                       res.send(orchids);
                   });
        }
    });
    app.listen(port);
    console.log("Running server on port:", port);
    //





});
