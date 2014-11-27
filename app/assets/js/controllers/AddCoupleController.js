angular.module('SecretSanta').controller('AddCoupleController', function ($scope,participants,$location) {
  $scope.addCouple = function(){
    if ($scope.addForm.$valid) {
      participants.addCouple($scope.participant.name1, $scope.participant.name2);
      $scope.participant = {};
    }
  };
});