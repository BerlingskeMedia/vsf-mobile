'use strict';


// This is the baseline list directive
app.filter('customdate', function($filter, config) {
  return function(input) {
    var now = new Date().getTime() - (new Date().getTimezoneOffset() * 60 * 1000),
        time = new Date(input).getTime(),
        diff = Math.ceil((now - time) / (1000 * 60));

    if (diff < config.timeAgoNowThreshold) {
      return 'Lige nu';
    }
    if (diff < config.timeAgoMinuteThreshold) {
      var text = (diff==1) ? ' minut' : ' minutter';
      return diff + text + ' siden';
    }
    if (diff < config.timeAgoHourThreshold) {
      var hours = Math.floor(diff / 60);
      var text = (hours==1) ? ' time' : ' timer';
      return hours + text + ' siden';
    }
    // Today
    if ($filter('date')(new Date(), 'M/d/yy') == $filter('date')(input, 'M/d/yy', '+0100')) {
      return $filter('date')(input, 'HH:mm' , '+0100');
    }
    // Yesterday
    var yesterday = now - (1000 * 60 * 60 * 24);
    if ($filter('date')(yesterday, 'M/d/yy') == $filter('date')(input, 'M/d/yy', '+0100')) {
      return 'I går'; //$filter('date')(input, 'HH:mm' , '+0100');
    }
    return $filter('date')(input, 'dd MMM yyyy', '+0100');
   };
})