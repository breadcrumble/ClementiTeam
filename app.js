angular.module('app', ['ui.bootstrap', 'chart.js'])
.directive('sticky', function($document) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      angular.element(document).ready(function() {
        var offset = element.offset(),
            topPadding = 85;
        $document.scroll(function() {
          if ($document.scrollTop() > offset.top) {
            element.stop().animate({
              marginTop: $document.scrollTop() - offset.top + topPadding
            });
          } else {
            element.stop().animate({
              marginTop: 0
            });
          };
        });
      });
    }
  };
})

.controller('WATenController', function($scope, $http) {
  $scope.dataOne = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];

  $scope.labels = ['2011', '2012', '2013', '2014'];
  $scope.series = ['Sales', 'Net Income', 'Cashflow'];

  //NOTE new stuff


  $scope.getExchange = function(ticker) {
    $scope.reutersOverview = {};
    $scope.reutersFinancial = {};
    $scope.yahooFinance = {};
    $scope.cashflowQ = {};
    $scope.cashflowA = {};
    $scope.balanceSheetQ = {};
    $scope.incomeQ = {};
    $scope.incomeA = {};
    $scope.dataOne = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    $http.get("https://api.import.io/store/data/41761159-261d-4429-9146-f18eb22a5a0d/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Fsnapshot%2Fsnapshot.asp%3Fticker%3D" + ticker + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.exchangeSymbol = data.results[0];
      $scope.getData(ticker, exchangeSwitch($scope.exchangeSymbol.exchange));
    });
  };
  $scope.getData = function(ticker, exchange) {
    // reuters overview
    $http.get("https://api.import.io/store/data/74d1f024-3c9d-4d4c-8ca4-3229d942452a/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2Foverview%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.reutersOverview = data.results[0];
      //$scope.dataOne.push($scope.bloombergIncomeOutput.results[0].nety);
    });
    // Reuters financial
    $http.get("https://api.import.io/store/data/6fab4b3f-87c9-4777-ab36-2f47a56ff723/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2FfinancialHighlights%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.reutersFinancial = data.results[0];
    });
    // Yahoo
    $http.get("https://api.import.io/store/data/24281222-34d8-4656-9924-fec56ada3384/_query?input/webpage/url=http%3A%2F%2Ffinance.yahoo.com%2Fq%2Fae%3Fs%3D" + ticker + "%2BAnalyst%2BEstimates&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.yahooFinance = data.results[0];
    });
    // cashflow quarterly
    $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DcashFlow%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.cashflowQ = data.results[0];
    });
    $http.get("https://api.import.io/store/data/5624f0bc-efcb-45e2-b9b5-0e9b4fd4982a/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DcashFlow%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.cashflowA = data.results[0];
      $scope.dataOne.splice(2, 1, $scope.cashflowA.cf_o);


    });
    // balance sheet quarterly
    $http.get("https://api.import.io/store/data/6c478c06-3d81-4e2a-bd82-8787cd07b587/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DbalanceSheet%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.balanceSheetQ = data.results[0];
    });
    // income statement quarterly
    $http.get("https://api.import.io/store/data/7072f2d5-f647-4e78-a4ef-19da8c1d9bfe/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DincomeStatement%26period%3DQ%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.incomeQ = data.results[0];
    });
    // income statement yearly
    $http.get("https://api.import.io/store/data/18a5f33c-b173-4b0a-9f4d-6356268bf8e4/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Ffinancials%2Ffinancials.asp%3Fticker%3D" + ticker + "%26dataset%3DincomeStatement%26period%3DA%26currency%3Dnative&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
      $scope.incomeA = data.results[0];
    });


  };
  // $scope.ticker = "FB";
  //$scope.exchange = "O";

  var exchangeSwitch = function(exchange) {
    if (exchange == ("NASDAQ GS" || "Consolidated Issue Listed on NASDAQ Global Select")) {
      return "O";
    } else if (exchange == ("New York Consolidated" || "New York")) {
      return "N";
    } else {
      return "O";
    }
  };
  $scope.exchangeSwitch = exchangeSwitch;


});
