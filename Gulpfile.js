var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var headerComment = require('gulp-header-comment');
var gulpStylelint = require('gulp-stylelint');
var stylefmt = require('gulp-stylefmt');
let cleanCSS = require('gulp-clean-css');
var gulpSequence = require('gulp-sequence')
var del = require('del');
var reload = browserSync.reload;

module.exports = gulp;

/* BROWSER SYNC */
gulp.task('browser-sync', function () {
  browserSync({
    port: 3040,
    server: {
      baseDir: "./",
      directory: true
    },
    https: true
  });
});

/* BROWSER SYNC RELOAD */
gulp.task('browser-sync-reload', function () {
  browserSync.reload();
});

/* LIST SCSS */
gulp.task('lint:scss', function () {
  return gulp
    .src('src/**/*.scss')
    .pipe(gulpStylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
});

/* COMPILE SCSS */
gulp.task('compile:scss', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'expanded'
      })
    .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 5%', 'last 4 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

/* FORMAT CSS */
gulp.task('format:css', function () {
  return gulp.src('dist/*.css')
    .pipe(stylefmt())
    .pipe(gulp.dest('dist'));
})

/* CLEAN DIST */
gulp.task('clean:dist', function () {
  return del(['dist']);
});

/* MINIFY CSS */
gulp.task('minify:css', () => {
  return gulp.src('dist/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie9'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist'));
});

/* SET HEADER */
gulp.task('set:header', function () {
  return gulp.src('dist/*.css')
    .pipe(headerComment(`
      pretty-checkbox.css

      A pure CSS library to beautify checkbox and radio buttons

      Source: <%= pkg.repository.link %>
      Demo: <%= pkg.homepage %>

      Copyright (c) <%= moment().format('YYYY') %> <%= _.capitalize(pkg.author) %>
    `))
    .pipe(gulp.dest('dist'))
});

gulp.task('build', function (cb) {
  gulpSequence('lint:scss', 'clean:dist', 'compile:scss', 'format:css', 'minify:css', 'set:header', cb)
});

gulp.task('default', ['compile:scss', 'browser-sync'], function () {
  gulp.watch("src/**/*.scss", ['compile:scss', 'browser-sync-reload']);
});
