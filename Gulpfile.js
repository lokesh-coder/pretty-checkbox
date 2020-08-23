const gulp = require('gulp');

const sass = require('gulp-sass');
sass.compiler = require('sass');

const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const headerComment = require('gulp-header-comment');
const gulpStylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

/* COMPILE SCSS */
exports['compile:scss'] = function compileSCSS() {
    return gulp
        .src('src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'expanded',
            }).on('error', sass.logError)
        )
        .pipe(
            autoprefixer({
                cascade: false,
            })
        )
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist'));
};

/* MINIFY CSS */
exports['minify:css'] = function minifyCSS() {
    return gulp
        .src('dist/*.css')
        .pipe(
            cleanCSS({
                compatibility: 'ie9',
            })
        )
        .pipe(
            rename({
                suffix: '.min',
            })
        )
        .pipe(gulp.dest('dist'));
};

/* SET HEADER */
exports['set:header'] = function setHeader() {
    return gulp
        .src('dist/*.css')
        .pipe(
            headerComment(`
      pretty-checkbox.css

      A pure CSS library to beautify checkbox and radio buttons

      Source: <%= pkg.repository.link %>
      Demo: <%= pkg.homepage %>

      Copyright (c) <%= new Date().getFullYear() %> <%= pkg.maintainers[0] %>
      Originally By: <%= _.capitalize(pkg.author) %>
    `)
        )
        .pipe(gulp.dest('dist'));
};

const build = gulp.series(
    exports['compile:scss'],
    exports['minify:css'],
    exports['set:header']
);

exports.build = build;
exports.default = build;
