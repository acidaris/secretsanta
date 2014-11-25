describe('assign tests',function(){
  var assign;
  var $localStorage;
  beforeEach(module('SecretSanta'));

  beforeEach(inject(function (participants,_assign_, _$localStorage_) {
    assign = _assign_;
    $localStorage = _$localStorage_;

    participants.add('Morgan');
    participants.add('Kayla');
    participants.add('Heather');
    participants.add('Holly');
    participants.add('Matt');
    participants.add('Erica');
    participants.add('Adam');
    participants.add('Erik');
    participants.add('Mom');

  }));

  var verifyAssignments = function(assignments){
    var participants = angular.copy($localStorage.participants);
    for(var i = 0; i < assignments.length; i++)
    {
      var assignment = assignments[i];

      var index = assignment.assignment.index;
      participants[index].assigned = true;
    }

    for (var i = 0; i < participants.length; i++) {
      var participant = participants[i];

      if(!participant.assigned)
      {
        console.log('participant not assigned',participant.name);
        return false;
      }
    }

    return true;

  };

  it('confirm assignment', function () {
    for(var i = 0; i < 100; i++)
    {
      assign();
      expect(verifyAssignments($localStorage.assignments)).toBe(true);
    }
  });
});