'use strict';

// stiften test indhold nodequeue 5780

app.factory('Tag', function($resource, BACKEND_ADDRESS) {
   return $resource(BACKEND_ADDRESS + 'tags/:id');
});
