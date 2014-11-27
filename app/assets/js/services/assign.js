angular.module('SecretSanta').service('assign', function ($localStorage) {

  var participants = $localStorage.participants;

  function getRandomInt(max) {
    return Math.floor(Math.random() * (max));
  }

  var createInitialList = function () {
    var assignments = [];

    angular.forEach(participants, function (participant) {
      assignments.push({
        participant:angular.copy(participant)
      });
    });
    return assignments;
  };

  /**
   * find first match.  Cannot be first's significant other
   */
  var firstMatch = function (list, first) {
    var current = null;
    var currentIndex = null;
    while (!current || current.participant.significantOther == first.participant.index) {
      currentIndex = getRandomInt(list.length);
      current = list[currentIndex];
    }

    list.splice(currentIndex, 1);

    first.assignment = current;
    current.assignment = first;
    return current;
  };

  /**
   * find first to insert, cannot be first or second's significant others
   */
  var secondMatch = function (list, first, second) {
    var current = null;
    var currentIndex = null;
    while (!current || current.participant.significantOther == first.participant.index ||
      current.participant.significantOther == second.participant.index) {
      currentIndex = getRandomInt(list.length);
      current = list[currentIndex];
    }

    list.splice(currentIndex, 1);

    first.assignment = current;

    current.assignment = second;
    return current;
  };

  var assignRemaining = function (list, first) {
    while (list.length > 0) {

      var currentIndex = getRandomInt(list.length);
      var current = list[currentIndex];


      var insertPoint = first;

      while (insertPoint.participant.significantOther === current.participant.index ||
        insertPoint.assignment.participant.significantOther === current.participant.index) {
        insertPoint = insertPoint.assignment;
      }

      current.assignment = insertPoint.assignment;
      insertPoint.assignment = current;

      list.splice(currentIndex, 1);

    }

  };

  var convertLinkedList = function(first,length)
  {
    var assigned = [];
    for (var i = 0, participant = first; i < length; i++, participant = participant.assignment) {

      var assignment = {
        participant: participant.participant,
        assignment: participant.assignment.participant
      };

      assigned.push(assignment);
    }
    return assigned;
  };

  var assign = function () {
    var list = createInitialList();
    var length = list.length;

    var firstIndex = getRandomInt(list.length);
    var first = list.splice(firstIndex, 1)[0];

    var second = firstMatch(list, first);

    secondMatch(list, first, second);

    assignRemaining(list, first);

    return convertLinkedList(first,length);

  };

  return function () {

    $localStorage.assignments = assign();
  }
});