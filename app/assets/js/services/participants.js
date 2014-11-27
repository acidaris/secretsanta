angular.module('SecretSanta').service('participants', function($localStorage){

  var participants = $localStorage.participants;

  this.add = function(name){
    participants.push({name:name,index:participants.length});
  };

  this.addCouple = function(name1, name2)
  {
    var length = participants.length;

    var p1 = {name: name1,
      significantOther: length+1,
      index: length};

    var p2 = {name: name2,
      significantOther: length,
      index: length+1};

    participants.push(p1);
    participants.push(p2);
  };
});