var gulp = require('gulp');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');

var isWatching = false;

gulp.task('browserify', function () {
  var bundleMethod = isWatching ? watchify : browserify;
  var bundler = bundleMethod({
    // Specify the entry point of your app
    entries: ['./src/leaflet.defaultextent'],
    debug: isWatching
  });

  var bundle = function () {
    return bundler
      .bundle()
      .pipe(source('dist/leaflet.defaultextent.js'));
  };
  if (isWatching) {
    bundler.on('update', bundle);
  }
  return bundle();
});

gulp.task('default', ['browserify']);
