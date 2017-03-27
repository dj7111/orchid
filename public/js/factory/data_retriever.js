
function DataRetriever(app, $http) {
    this.url = app.url;
    this.$http = $http;

    this.search = function(id, table, cb) {
        var self = this;
        self.get(table+"/"+id, function(status, data) {
            cb && cb(data);
        });
    };

    this.all = function(table, cb) {
        var self = this;
        self.get(table + "/all", function(status, data) {
            cb && cb(data);
        });
    };

    this.get = function(endPoint, cb) {
        $http({
          method: 'GET',
          url: this.url + "/" + endPoint
        }).then(function successCallback(response) {
            cb && cb(response.status, response.data);
          }, function errorCallback(response) {
            console.log("GET error", response.status, response);
            cb && cb(response.status, response.data);
          });
    };
}


app.factory("dataRetriever", ['$http', function($http){
    return new DataRetriever(app, $http);
}]);
