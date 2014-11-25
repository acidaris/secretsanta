angular.module('SecretSanta.participant', ['ngStorage']).directive('participantList', function ($localStorage) {
  return {
    restrict: 'A',
    scope: {},
    templateUrl: './assets/templates/participant-list.html',
    link: function (scope) {
      scope.participants = $localStorage.participants;
    }

  }
});