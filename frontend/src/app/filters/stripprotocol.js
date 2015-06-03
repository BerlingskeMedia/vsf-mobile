'use strict';


// This filter removes protocol and www
app.filter('stripprotocol', function() {
  return function(input) {
    return input.replace(/^(https?|ftp):\/\/(www.)?/, '');
  };
})