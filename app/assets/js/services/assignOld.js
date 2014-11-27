angular.module('SecretSanta').service('assignOld', function ($localStorage) {

  var participants = $localStorage.participants;

  var copyAndRemove = function (list, user) {
    var copy = angular.copy(list);

    for (var i = 0, length = copy.length; i < length; i++) {

      if (user.index === copy[i].index) {
        copy.splice(i, 1);
        break;
      }
    }

    return copy;
  };

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }

  var createInitialList = function () {
    var assignments = [];

    angular.forEach(participants, function (participant) {
      assignments.push({
        participant: participant,
        assignment: '',
        possible: copyAndRemove(participants, participant)
      });
    });
    return assignments;
  };

  var removeFromOthers = function (assignments, user) {
    angular.forEach(assignments, function (participant) {
      participant.possible = copyAndRemove(participant.possible, user);
    });
  };

  var assign = function (assignments) {
    var index = getRandomInt(assignments.length);

    var current = assignments[index];

    var first = current.participant;

    removeFromOthers(assignments, first);

    while (current.possible.length != 0){
      var selected = getRandomInt(current.possible.length);

      var assignment = current.possible[selected];
      current.assignment = assignment;
      current.possible = [];
      removeFromOthers(assignments, assignment);

      current = assignments[assignment.index];
    }

    current.assignment = first;
  };

  return function () {

    var assignments = createInitialList();
    assign(assignments);

    $localStorage.assignments = assignments;
  }
});