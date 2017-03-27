app.controller('orchidListController', ['$scope', 'dataRetriever',
                  function($scope, dataRetriever){
   $scope.dataRetriever = dataRetriever;
   $scope.orchids = [];
   $scope.orchidSearchId = 1;
   $scope.searchOrchidById = function(id) {
      $scope.dataRetriever.search(id, "orchid", function(data){
         $scope.orchids = data;
      });
   };
}]);

