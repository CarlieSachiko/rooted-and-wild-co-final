(function() {
'use strict';

angular.module('app')
  .filter('flowerType', function() {
    return function(bouquet, flower) {
      if (!flower) return bouquet;
      return bouquet.filter(bouquet => bouquet.flower_used.some(f => f.toLowerCase() === flower.toLowerCase()));
    };
  });

})();
