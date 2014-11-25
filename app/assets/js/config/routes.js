angular.module('SecretSanta')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      controller: 'AddController',
      templateUrl: './assets/views/add-view.html'
    }).when('/create', {
      templateUrl: './assets/views/create-view.html',
      controller: 'CreateController'
    }).otherwise({
        redirectTo: '/'
      });
  }]);