var gulp = require('gulp');

var wrap = require('gulp-wrap-umd');

var isWatching = false;

gulp.task('wrap', function () {
  var wrapOptions = {
    namespace: 'L.Control.DefaultExtent',
    deps: [
      {
        name: 'leaflet',
        globalName: 'L',
        paramName: 'L'
      }
    ]
  };
  gulp
    .src(['src/*.js'])
    .pipe(wrap(wrapOptions))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['wrap']);
