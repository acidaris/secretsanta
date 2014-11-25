angular.module('SecretSanta').service('participants', function($localStorage){

  var participants = $localStorage.participants;

  this.add = function(name){
    participants.push({name:name,index:participants.length});
  };
});