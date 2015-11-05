angular.module('app').service('reutersService',
['$http', '$log', function($http, $log) {
/*note pseudo code

1. fn(ticker) -> get exchange
2. exchangeSwitch
3. Reuters and others which require both ticker and exchange

*/


  this.testing = "reuters works";
}]);
