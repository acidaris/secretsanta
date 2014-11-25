angular.module('SecretSanta',[
  'ngRoute',
  'ngStorage',
  'SecretSanta.participant'
]);
angular.module('SecretSanta.participant',['ngStorage']);