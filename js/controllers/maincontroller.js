angular.module('app')

.controller('MainController', ['$scope', '$http', '$log', '$anchorScroll', '$location', 'morningStarService',
function($scope, $http, $log, $anchorScroll, $location, morningStarService) {

$log.log(morningStarService.test);
$scope.testfn = function() {
  $log.log("fuck you");
};
//NOTE AUTOSCROLL function
  $scope.scrollTo = function(id) {
       $location.hash(id);
       $anchorScroll();
    };
//NOTE Chart function
    $scope.chartArray = [
      [0, 0, 1, 0],
      [0, 0, 2, 0],
      [0, 0, 0, 0]
    ];
    $scope.labels = ['Y1', 'Y2', 'Y3', 'Y4'];
   $scope.series = ['Sales', 'Net Income', 'Cashflow'];

//NOTE API

  $scope.title = "WA 10 Steps";
  //NOTE three morningstar API

$scope.stockObject = morningStarService.stockObject;
$scope.tickerOnly = morningStarService.tickerOnly;
  // tickerOnly("GOOG");
  $log.log("testing");
}]);
