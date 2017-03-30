var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
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

gulp.task('sass', function() {
  return gulp.src('src/**/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['> 5%','last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('src/'))
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

gulp.task('bs-reload', function() {
  browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync'], function() {
  gulp.watch("src/**/*.scss", ['sass', 'bs-reload']);
});