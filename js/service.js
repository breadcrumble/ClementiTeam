//NOTE delete later omfg


angular.module('app').service('dataService', function($http, $log) {
  var self = this;
  self.testing = "sdfdf";
  var getExchange = function(ticker) {
    $http.get("https://api.import.io/store/data/41761159-261d-4429-9146-f18eb22a5a0d/_query?input/webpage/url=http%3A%2F%2Fwww.bloomberg.com%2Fresearch%2Fstocks%2Fsnapshot%2Fsnapshot.asp%3Fticker%3D" + ticker + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        self.exchangeSymbol = data;
        $log.log(data);
      });
  };

  // getExchange("GOOG");
  var tickerOnly = function(ticker) {
    $http.get("https://api.import.io/store/data/40359466-98a4-473d-bfff-d439b8cdcd96/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fcash-flow%2Fcf.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        self.cashflow = data;
        $log.log(data);
      });
  };

  // tickerOnly("GOOG");

  var tickerAndExchange = function(t,e) {
    // body...
  };

  // $http.get("https://api.import.io/store/data/74d1f024-3c9d-4d4c-8ca4-3229d942452a/_query?input/webpage/url=http%3A%2F%2Fwww.reuters.com%2Ffinance%2Fstocks%2Foverview%3Fsymbol%3D" + ticker + "." + exchange + "&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
  //      $scope.reutersOverview = data.results[0];
  //    });


});
