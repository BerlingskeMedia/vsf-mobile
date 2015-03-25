'use strict';

app.factory('PreprocesArticle', function() {
  return function(item) {
    for (var x=0; x < item.fields.length; x++) {
      if (item.fields[x].attributes.keys == 'p_tag') {
        if (item.fields[x].attributes.label == 328917) {
        // Breaking, presentation tag
          item.alertType = 'alert-breaking';
          item.alertLabel = 'Breaking';
        }
        // Just-now, presentation tag
        if (item.fields[x].attributes.label == 328920) {

          item.alertType = 'alert-justnow';
          item.alertLabel = 'Netop nu';
        }
      }
    }
    return item;

  }

});