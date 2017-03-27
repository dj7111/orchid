
app.controller('orchidListController', ['$scope', 'dataRetriever',
                  function($scope, dataRetriever){
   $scope.dataRetriever = dataRetriever;
   $scope.orchids = [];
   $scope.orchidSearchId = 3;
   $scope.searchOrchidById = function(id) {
      $scope.dataRetriever.getById(id, "orchid", function(orchids){
         $scope.orchids = orchids;
         $scope.loadOfferings();
      });
   };
   $scope.findOfferingsByOrchidId = function(orchidId, cb) {
      $scope.dataRetriever.findOfferingsByOrchidId(orchidId, function(offerings){
         cb && cb(orchidId, offerings);
      });
   };
   $scope.loadOfferings = function() {
      for(I in $scope.orchids) {
         $scope.findOfferingsByOrchidId($scope.orchids[I].id, function(orchidId, offerings){
            for(J in $scope.orchids) {
               if($scope.orchids[J].id == orchidId) {
                  $scope.orchids[J].offerings = offerings;
               }
            }
         });
      }
   };
}]);

