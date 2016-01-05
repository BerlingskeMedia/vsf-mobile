'use strict';

app.factory('PreprocesAlertArticle', function() {
  return function(item) {
    item.isInSports = false;
    item.displayMoreHeader = false;
    var blacklist = [
        69931, //Lysavis
        68397, //Forside
    ];

    // Find presentation tags
    if ('fields' in item) {
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
        if (item.fields[x].attributes.keys == 'tag') {
          if (!('tags' in item)) {
            item.tags = [];
          }
          if (item.fields[x].value.toLowerCase() == 'sport') {
            item.isInSports = true;
          }
          if (blacklist.indexOf(item.fields[x].attributes.label) < 0) {
            item.tags.push(item.fields[x]);
          }


        }
      }
    }
    return item;
  }
});


app.factory('PreprocesArticle', function(localStorageService, $sce) {
  return function(scope) {

    //Remove cdata-wrapper
    scope.story.content = scope.story.content.replace("<![CDATA[", "").replace("]]>", "");

    // Always trust html, so video tags do not get stripped.
    scope.story.content = $sce.trustAsHtml(scope.story.content);

    // Find related content

    if ('story' in scope && 'related' in scope.story) {

      for (var x=0; x < scope.story.related.length; x++) {

        // Extract fact-box
        if (scope.story.related[x]['value'].content_type == 'facts') {
          var nid = scope.story.related[x]['value'][0]['value'];
          scope.story.factId = nid;
        }
        // Extract fact-box
        if (scope.story.related[x]['value'].content_type == 'news_article') {
          if (!('relatedStories' in scope.story)) {
            scope.story.relatedStories = [];
          }
          scope.story.relatedStories.push(scope.story.related[x]['value']);

        }

      }
    }
  }
});
