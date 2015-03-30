'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');
// inject bower components
gulp.task('wiredep', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src('src/index.html')
    .pipe(wiredep({
      directory: 'bower_components',
      exclude: [/bootstrap-sass-official/, /bootstrap.js/, /bootstrap.css/],
    }))
    .pipe(gulp.dest('src'))
    .pipe(connect.reload());
});
