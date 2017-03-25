module.exports = function OrchidRepo(db, table) {
    if(!(this instanceof OrchidRepo)) {
        return new OrchidRepo(db, table);
    }

    this.db = db;
    this.table = table;

    this.all = function(cb) {
        this.table.find({}, cb);
    };
    this.getById = function(id, cb) {
        this.table.find({id: id}, cb);
    };

};