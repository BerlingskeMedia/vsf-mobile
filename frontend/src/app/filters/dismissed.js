'use strict';

// Filters dismissedArticles
app.filter('dismissed', function(localStorageService, relativizeFilter) {
  return function(articles) {
    var dismissedArticles = localStorageService.get('dismissedArticles');
    var filteredArticles = [];
    if (dismissedArticles !== null) {
      angular.forEach(articles, function(value, key) {
        if (dismissedArticles.indexOf(relativizeFilter(value.link)) < 0) {
          this.push(value);
        }
      
      }, filteredArticles);
      return filteredArticles;
    }
    return articles;
  };
})