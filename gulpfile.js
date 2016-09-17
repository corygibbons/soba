var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');


gulp.task('default', ['stylus'], function() {
  browserSync.init({
    proxy: "sa.ba"
  });
  gulp.watch('src/stylus/**/*.styl', ['stylus']);
  gulp.watch(['*.twig', '**/*.twig']).on('change', browserSync.reload);
});


gulp.task('stylus', function() {
  gulp.src('src/stylus/*.styl')
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(stylus({
    'include css': true
  }))
  .pipe(autoprefixer('last 15 version'))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./assets/css/'))
  .pipe(browserSync.stream());
});