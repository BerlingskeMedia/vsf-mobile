'use strict';


// This is the baseline list directive
app.filter('relativize', function(BACKEND_ADDRESS) {
  return function(input) {
    input = input || '';
    var out = "";
    var absoluteUrl = input;
    return absoluteUrl.replace(BACKEND_ADDRESS, '');
  };
})