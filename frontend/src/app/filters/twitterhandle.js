'use strict';


// This is the baseline list directive
app.filter('twitterhandle', function() {
  return function(input) {

    return input.replace(/^(https?|ftp):\/\/twitter\.com\//, '@');
  };
})