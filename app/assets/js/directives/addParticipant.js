angular.module('SecretSanta.participant').directive('addParticipant', function (participants) {
  return {
    restrict: 'A',
    scope: {},
    templateUrl: './assets/templates/add-participant.html',
    link: function (scope) {
      scope.participant = {name: ''};
      scope.add = function () {
        if (scope.addForm.$valid) {
          participants.add(scope.participant.name);

          scope.participant.name = '';

        }
      }
    }
  }


});