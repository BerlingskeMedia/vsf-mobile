'use strict';

app.filter('relativize', function(BASE_URL_TO_RELATIVIZE) {
  return function(input) {
    input = input || '';
    var out = "";
    var absoluteUrl = input;
    return absoluteUrl.replace(BASE_URL_TO_RELATIVIZE, '');
  };
})