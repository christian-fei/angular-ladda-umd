var gulp = require('gulp')
  , browserify = require('browserify')
  , source = require('vinyl-source-stream')
  , buffer = require('vinyl-buffer')
  , rename = require('gulp-rename')
  , uglify = require('gulp-uglify')
  , umd = require('gulp-umd')

gulp.task('build', function() {
  var browserifyStream = browserify({
        entries: 'src/index.js',
        insertGlobals: false,
        debug: false,
      })
  return browserifyStream.bundle()
    .pipe(source('angular-ladda-umd.min.js'))
    .pipe(umd({
      exports: function(file) {return 'AngularRequestLoading'},
      namespace: function(file) {return 'AngularRequestLoading'},
    }))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
})
