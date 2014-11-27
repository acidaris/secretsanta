angular.module('SecretSanta')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'ListController',
      templateUrl: './assets/views/list-view.html'
    }).when('/create', {
      templateUrl: './assets/views/create-view.html',
      controller: 'CreateController'
    }).when('/add', {
      templateUrl: './assets/views/add-view.html',
      controller: 'AddCoupleController'
    }).otherwise({
        redirectTo: '/'
      });
  }]);