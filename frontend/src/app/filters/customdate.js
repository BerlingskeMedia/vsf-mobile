'use strict';


// This is the baseline list directive
app.filter('customdate', function($filter, config) {
  return function(input) {
    var now = new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000),
        time = new Date(input).getTime(),
        diff = Math.ceil((now - time) / (1000 * 60));

    if (diff < config.timeAgoThreshold) {
      var text = (diff==1) ? ' minut' : ' minutter';
      return diff + text + ' siden';
    }
    if ($filter('date')(new Date(), 'M/d/yy') == $filter('date')(input, 'M/d/yy', '+0100')) {
      return $filter('date')(input, 'HH:mm' , '+0100');
    }
    return $filter('date')(input, 'HH:mm - d/M yyyy', '+0100');
   };
})