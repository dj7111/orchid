//var Orchid = require(__dirname + "/lib/model/orchid.js");
//
//var dbResult = require(__dirname + "/g.js");
//var orchids = [];
//for(var i=0; i<dbResult.length; i++) {
//    var o = new Orchid(dbResult[i][0], dbResult[i][1]);
//    orchids.push(o);
//}
//
//for(var i=0; i<orchids.length; i++) {
//    console.log(orchids[i].flickrSearchUrl());
//}


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

    app.get('/', function (req, res) {
      res.send('Hello World')
    })
    app.get('/orchids/:id', function (req, res) {
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
    })
    app.listen(3000)
    //





});
