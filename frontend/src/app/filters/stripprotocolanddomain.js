'use strict';


// This filter removes protocol and www
app.filter('stripprotocolanddomain', function() {
  return function(input) {
    return input.replace(/^(https?|ftp):\/\/(www.)?.*\.(com|dk)/, '');
  };
})