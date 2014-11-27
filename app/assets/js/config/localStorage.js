angular.module('SecretSanta').run(function ($localStorage) {

  $localStorage.$default({
    participants: []
  });

//  $localStorage.$reset();
});
