module.exports = function DataRetriever() {
    if(!(this instanceof DataRetriever)) {
        return new DataRetriever();
    }

    this.getById = function(table, id, cb) {
        if(id == "all") {
            table.find({}, function(err, results){
                cb && cb(results);
            });
        } else {
            table.find({id:id}, function(err, results){
                cb && cb(results);
            });
        }
    };
};