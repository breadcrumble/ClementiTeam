angular.module('app')

.controller('MainController', ['$http', '$log', '$anchorScroll', function($http, $log, $anchorScroll) {

  var self = this;
  self.title = "WA 10 Steps";
  var tickerOnly = function(ticker) {
    $http.get("https://api.import.io/store/data/40359466-98a4-473d-bfff-d439b8cdcd96/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fcash-flow%2Fcf.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a").success(function(data) {
        self.cashflow = data;
        $log.log(data);
      });
  };
  // tickerOnly("GOOG");
  $log.log("tetsing");
}]);
