'use strict';

app.controller('LogoutController', function() {

   document.cookie = 'sso_token=; expires=' + expire.toUTCString() + '; path=/';

});
