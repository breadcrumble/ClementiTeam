angular.module('app').service('morningStarService', ['$http', '$log', function($http, $log) {
var self = this;
self.stockObject = {};
self.newArray = [];
self.ivObject = {};
  this.tickerOnly = function(ticker) {
    $log.log("Button was clicked");
    //NOTE morningStar CF API
    $http.get("https://api.import.io/store/data/40359466-98a4-473d-bfff-d439b8cdcd96/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fcash-flow%2Fcf.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {


      if (data.data.results) {
        self.stockObject["cashflow"] = data.data.results[0];
        self.stockObject.cashflow.ocf.splice(5,1);
        self.newArray.splice(2,1,self.stockObject.cashflow.ocf);
        self.ivObject["cashflow"] = self.stockObject.cashflow.ocf[4];
    }

    else {
      $log.log("No results for MorningStar CF API");
    }
        $log.log(data);
        $log.log(self.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar CF API");
      // body...
    });

    //NOTE morningStar BS API
    $http.get("https://api.import.io/store/data/5c03d7f6-f142-43e8-9a3d-8c145bfa5a6a/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fbalance-sheet%2Fbs.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {
      if (data.data.results) {
        self.stockObject["balanceSheet"] = data.data.results[0];

    } else {
      $log.log("No results for MorningStar BS API");
    }
        $log.log(data);
        $log.log(self.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar BS API");
      // body...
    });
    //NOTE morningStar IS API
    $http.get("https://api.import.io/store/data/4ba2a524-7c3f-4563-bf0b-ce6d4d14d6c1/_query?input/webpage/url=http%3A%2F%2Ffinancials.morningstar.com%2Fincome-statement%2Fis.html%3Ft%3D"+ticker+"%26region%3Dusa%26culture%3Den-US&_user=685ff313-5202-4859-9151-5f05b6d38fa6&_apikey=685ff3135202485991515f05b6d38fa6d63e0a91e0726cd9a83c014363765dec4f93106128f4aee1f59af997f215355c549765b0e6611f4797dd2b03ef9ccc663fd9071946ee68480bdb6ba084190b2a")
    .then(function successCallback(data) {
      if (data.data.results) {
        self.stockObject["incomeStatement"] = data.data.results[0];
        self.stockObject.incomeStatement.revenue.splice(5,1);
        self.stockObject.incomeStatement.netincome.splice(5,1);
        self.newArray.splice(0,1,self.stockObject.incomeStatement.revenue);
        self.newArray.splice(1,1,self.stockObject.incomeStatement.netincome);


    } else {
      $log.log("No results for MorningStar IS API");
    }
        $log.log(data);
        $log.log(self.stockObject);
      },
    function errorCallback (data) {
      $log.log("There has been an error for the Morningstar IS API");
      // body...
    });

  };//end tickerOnly



}]);
