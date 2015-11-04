angular.module('app')

.controller('MainController', ['$http', 'dataService', function($http, dataService) {
  this.asdf = dataService.testing;
  this.test = "WA 10 Steps";
}]);
