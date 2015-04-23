'use strict';

app.factory('PreprocesAlertArticle', function() {
  return function(item) {
        console.log(item);
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
      }
    }
    return item;
  }
});


app.factory('PreprocesArticle', function(ContentItemById, localStorageService, $sce) {
  return function(scope) {
    // Always trust html, so video tags do not get stripped.
    scope.story.content = $sce.trustAsHtml(scope.story.content);
    return scope;
    // Find related content

    /*if ('related' in item) {
      for (var x=0; x < item.related.length; x++) {
        if (item.related[x]['value'].content_type == 'facts') {
          var nid = item.related[x]['value'][0]['value'];
          // secondly we get it from the server.
          var content =  ContentItemById.get({id:nid, imagesize: '650x'});
          content.$promise.then(function(){
            //$scope.story = PreprocesArticle(PreprocesAlertArticle(content.items[0]));
            //localStorageService.set($routeParams.tag + '/' + $routeParams.articleid, $scope.story);
            console.log(scope);
          });

        }
      }
    }*/
  }
});
