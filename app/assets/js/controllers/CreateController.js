angular.module('SecretSanta').controller('CreateController',function($scope, $localStorage, assign){
  $scope.assign = function(){
    assign();
    $scope.assignments = $localStorage.assignments;
  };
});