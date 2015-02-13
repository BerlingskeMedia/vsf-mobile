'use strict';

var gulp = require('gulp');

gulp.task('watch', ['styles'] ,function () {
  gulp.watch('src/{app,assets}/**/*.scss', ['styles']);
  gulp.watch('src/app/**/*.js', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('src/assets/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep']);
});