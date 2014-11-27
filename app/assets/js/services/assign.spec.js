describe('assign tests',function(){
  var assign;
  var $localStorage;
  beforeEach(module('SecretSanta'));

  beforeEach(inject(function (participants,_assign_, _$localStorage_) {
    assign = _assign_;
    $localStorage = _$localStorage_;

    participants.addCouple('Heather','Adam');
    participants.addCouple('Erica','Matt');
    participants.addCouple('Morgan','Kayla');
    participants.add('Holly');
    participants.add('Erik');
    participants.add('Mom');

  }));

  var verifyAssignments = function(assignments){
    var participants = angular.copy($localStorage.participants);
    for(var i = 0; i < assignments.length; i++)
    {
      var assignment = assignments[i];

      var index = assignment.assignment.index;
      if(index !== undefined){
        participants[index].assigned = true;
      }
      else{
        return false;
      }

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
    for(var i = 0; i < 1000; i++)
    {
      assign();
      expect(verifyAssignments($localStorage.assignments)).toBe(true);
    }
  });
});