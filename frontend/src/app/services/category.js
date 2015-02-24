'use strict';

app.factory('Category', function() {
  var categories = {
    'indland': 64914,
    'udland': 64916,
    'sport': 64874,
    'kultur': 64897,
  }
  return function(category) {
    if (category in categories) {
      return categories[category];
    }
    return 
  };
});


