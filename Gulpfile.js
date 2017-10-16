var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var headerComment = require('gulp-header-comment');
var reload = browserSync.reload;

module.exports = gulp;

gulp.task('browser-sync', function() {
  browserSync({
    port: 3040,
    server: {
      baseDir: "./",
      directory: true
    }
  });
});

gulp.task('build:sass', function() {
  return gulp.src('src/**/*.scss')
   .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 5%','last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('header:comment',function(){
  return gulp.src('dist/**/*.css')
    .pipe(headerComment(`
      pretty-checkbox.css - <%= pkg.homepage %>

      Version: v<%= pkg.version %>
      Licensed under the MIT license - http://opensource.org/licenses/MIT

      Copyright (c) <%= moment().format('YYYY') %> <%= _.capitalize(pkg.author) %>
    `))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['build:sass', 'browser-sync'], function () {
  gulp.watch("src/**/*.scss", ['build:sass', 'bs-reload']);
});