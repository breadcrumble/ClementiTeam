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
  $scope.stockObject = {};
  $scope.title = "WA 10 Steps";
  //NOTE three morningstar API

  $scope.tickerOnly = function(ticker) {
    $log.log("Button was clicked");
    //NOTE morningStar CF API
    $http.get("https://api.import.io/store/data/40359466-98a4-473d-bfff-d439b8cdcd96/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fcash-flow%2Fcf.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {


      if (data.data.results) {
        $scope.stockObject["cashflow"] = data.data.results[0];
    }

    else {
      $log.log("No results for MorningStar CF API");
    }
        $log.log(data);
        $log.log($scope.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar CF API");
      // body...
    });

    //NOTE morningStar BS API
    $http.get("https://api.import.io/store/data/5c03d7f6-f142-43e8-9a3d-8c145bfa5a6a/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fbalance-sheet%2Fbs.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {
      if (data.data.results) {
        $scope.stockObject["balanceSheet"] = data.data.results[0];
    } else {
      $log.log("No results for MorningStar BS API");
    }
        $log.log(data);
        $log.log($scope.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar BS API");
      // body...
    });
    //NOTE morningStar IS API
    $http.get("https://api.import.io/store/data/4ba2a524-7c3f-4563-bf0b-ce6d4d14d6c1/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fincome-statement%2Fis.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {
      if (data.data.results) {
        $scope.stockObject["incomeStatement"] = data.data.results[0];
    } else {
      $log.log("No results for MorningStar IS API");
    }
        $log.log(data);
        $log.log($scope.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar IS API");
      // body...
    });

  };
  // tickerOnly("GOOG");
  $log.log("testing");
}]);
