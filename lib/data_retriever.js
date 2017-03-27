module.exports = function DataRetriever() {
    if(!(this instanceof DataRetriever)) {
        return new DataRetriever();
    }

    this.getById = function(table, id, cb) {
        var filter = id == "all" ? {} : {id:id};
        table.find(filter, function(err, results){
            cb && cb(results);
        });
    };

    this.getByFilter = function(table, filter, cb) {
        table.find(filter, function(err, results){
            cb && cb(results);
        });
    };
};