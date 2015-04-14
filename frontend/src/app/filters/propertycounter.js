'use strict';


// This is the baseline list directive
app.filter('propertyCounter', function() {
  return function(input) {
    var count = Object.keys(input).length;
    return count;
   };
})