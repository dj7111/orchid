app.controller('orchidListController', ['$scope','$http',function($scope, $http){
   $scope.ctrl = new OrchidListController(app.url, $scope, $http);
   $scope.orchidSearchId = 1;
}]);

function OrchidListController(url, $scope, $http) {
    this.url = url;
    this.$scope = $scope;
    this.$http = $http;

    this.search = function(id) {
        var self = this;
        self.get("orchids/"+id, function(status, data) {
            self.$scope.orchids = data;
        });
    };

    this.loadAll = function() {
        var self = this;
        self.get("orchids/all", function(status, data) {
            self.$scope.orchids = data;
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