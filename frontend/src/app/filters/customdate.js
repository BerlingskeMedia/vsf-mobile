'use strict';


// This is the baseline list directive
app.filter('customdate', function($filter) {
  return function(input) {
    if ($filter('date')(new Date(), 'M/d/yy') == $filter('date')(new Date(input), 'M/d/yy')) {
      return $filter('date')(input, 'HH:mm' , '+0100');
    }
    return $filter('date')(input, 'HH:mm - d/M yyyy', '+0100');
   };
})