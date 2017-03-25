module.exports = {
    orchid:{
        id: {type: 'serial', key: true},
        genus: String,
        species: String,
        affinis: {type:'boolean', defaultValue:0},
        variety: String,
        clonal_name: String
    },
    vendor:{
        id: {type: 'serial', key: true},
        name: String,
        country: String,
    },
    offering:{
      id: {type: 'serial', key: true},
      orchidId: Number,
      vendorId: Number,
      cost: Number
    },
    import_event : {
        id:{type: 'serial', key: true},
        vendorId: Number,
        fromDate : Date,
        toDate : Date,
        preorderDeadline : Date
    }
};
