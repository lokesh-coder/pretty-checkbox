var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var reload = browserSync.reload;
var fileinclude = require('gulp-file-include');

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

gulp.task('sass', function() {
  return gulp.src('*.scss',{base:'./'})
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('src/'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('fileinclude', function() {
  gulp.src('dev-index.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(rename({
      basename: 'index',
      extname: ".html"
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync','fileinclude'], function() {
  gulp.watch("*.scss", ['sass', 'bs-reload']);
  gulp.watch("*.html", ['fileinclude', 'bs-reload']);
});