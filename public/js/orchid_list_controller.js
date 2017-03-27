
app.controller('orchidListController', ['$scope', 'dataRetriever',
                  function($scope, dataRetriever){
   $scope.dataRetriever = dataRetriever;
   $scope.orchids = [];
   $scope.orchidSearchId = 3;
   $scope.loadVendors = function(cb){
      $scope.dataRetriever.getById("all", "vendor", function(vendors){
         cb && cb(vendors);
      });
   };
   $scope.searchOrchidById = function(id) {
      $scope.loadVendors(function(vendors){
         $scope.vendors = vendors;
         $scope.dataRetriever.getById(id, "orchid", function(orchids){
            $scope.orchids = orchids;
            $scope.loadOfferings();
         });
      });
   };
   $scope.loadOfferings = function() {
      for(I in $scope.orchids) {
         $scope.findOfferingsByOrchidId($scope.orchids[I].id, function(orchidId, offerings){
            for(J in $scope.orchids) {
               if($scope.orchids[J].id == orchidId) {
                  for(K in offerings) {
                     offerings[K].vendor = $scope.findVendorById(offerings[K].vendorId);
                  }
                  offerings.sort(function(a, b){
                     return a.cost<=b ? -1 : 1;
                  });
                  $scope.orchids[J].offerings = offerings;
               }
            }
         });
      }
   };
   $scope.findVendorById = function(vendorId) {
      var vendor = null;
      for(I in $scope.vendors) {
         if($scope.vendors[I].id == vendorId){
            vendor = $scope.vendors[I];
            break;
         }
      }
      return vendor;
   };
   $scope.findOfferingsByOrchidId = function(orchidId, cb) {
      $scope.dataRetriever.findOfferingsByOrchidId(orchidId, function(offerings){
         cb && cb(orchidId, offerings);
      });
   };
}]);

