'use strict';


// This is the baseline list directive
app.filter('iconize', function($filter) {
  return function(input) {
    
    return 'wi-time-' + $filter('date')(input, 'h', '+0100');
  };
})