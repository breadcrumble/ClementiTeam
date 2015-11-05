angular.module('app')

.controller('MainController', ['$scope', '$http', '$log', '$anchorScroll', '$location', 'morningStarService', 'reutersService',
function($scope, $http, $log, $anchorScroll, $location, morningStarService, reutersService) {

$log.log(reutersService.testing);
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
    $scope.labels = ['Y1', 'Y2', 'Y3', 'Y4', 'Y5'];
   $scope.series = ['Sales', 'Net Income', 'Cashflow'];

//NOTE API

  $scope.title = "WA 10 Steps";
  //NOTE three morningstar API from Morningstar Service

$scope.stockObject = morningStarService.stockObject;
$scope.tickerOnly = morningStarService.tickerOnly;

//NOTE newarray is the array for the chart
$scope.newArray = morningStarService.newArray;
//NOTE test data

$scope.aaplData = { "incomeStatement": { "revenue": [ 108249, 156508, 170910, 182795, 233715, 233715 ], "netincome/_source": [ "25,922", "41,733", "37,037", "39,510", "53,394", "53,394" ], "years/_source": [ "2011", "09", "2012", "09", "2013", "09", "2014", "09", "2015", "09" ], "revenue/_source": [ "108,249", "156,508", "170,910", "182,795", "233,715", "233,715" ], "netincome": [ 25922, 41733, 37037, 39510, 53394, 53394 ], "profit": [ 43818, 68662, 64304, 70537, 93626, 93626 ], "years": [ 2011, 9, 2012, 9, 2013, 9, 2014, 9, 2015, 9 ], "profit/_source": [ "43,818", "68,662", "64,304", "70,537", "93,626", "93,626" ] }, "cashflow": { "ocf/_source": [ "37,529", "50,856", "53,666", "59,713", "81,266", "81,266" ], "ocf": [ 37529, 50856, 53666, 59713, 81266, 81266 ] }, "balanceSheet": { "std": [ "?", "?", "?", "6,308", "10,999" ], "cash/_source": [ "9,815", "10,746", "14,259", "13,844", "21,120" ], "sti": [ 16137, 18383, 26287, 11233, 20481 ], "cash": [ 9815, 10746, 14259, 13844, 21120 ], "ltd": [ "?", "?", "16,960", "28,987", "53,463" ], "sti/_source": [ "16,137", "18,383", "26,287", "11,233", "20,481" ] }
};


$scope.ivObject = morningStarService.ivObject;
}]);
