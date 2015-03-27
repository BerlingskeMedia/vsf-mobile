'use strict';

var gulp = require('gulp');

var util = require('util');

var connect = require('gulp-connect');




var modRewrite = require('connect-modrewrite');


// Rewriting rule for clean urls
var middleware = [
    modRewrite([
        '!\\.\\w+$ /index.html [L]',
        '^/bower_components/(.*) /$1'
    ])
];


gulp.task('serve', ['watch'], function() {
  connect.server({
    port: 3000,
    livereload: true,
    root: ['src', '.tmp', 'src/assets', 'bower_components'],
    middleware: function () {
      return middleware;
    }
  });
});

gulp.task('serve:dist', ['build'], function () {
  connect.server({
    port: 3000,
    root: ['dist']
  });
});

