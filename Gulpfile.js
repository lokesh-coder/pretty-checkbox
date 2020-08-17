const gulp = require('gulp');
const browserSync = require('browser-sync');

const sass = require('gulp-sass');
sass.compiler = require('sass');

const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const headerComment = require('gulp-header-comment');
const gulpStylelint = require('gulp-stylelint');
const cleanCSS = require('gulp-clean-css');
const del = require('del');

const reload = browserSync.reload;

/* BROWSER SYNC */
exports['browser-sync'] = function serve() {
    browserSync({
        port: 3040,
        server: {
            baseDir: './',
            directory: true,
        },
        https: true,
    });
};

/* BROWSER SYNC RELOAD */
exports['browser-sync-reload'] = function browserSyncReload() {
    browserSync.reload();
};

/* LIST SCSS */
exports['lint:scss'] = function lintCSS() {
    return gulp.src('src/**/*.scss').pipe(
        gulpStylelint({
            reporters: [
                {
                    formatter: 'string',
                    console: true,
                },
            ],
        })
    );
};

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
        .pipe(gulp.dest('dist'))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        );
};

/* FORMAT CSS */
exports['format:css'] = function formatCSS() {
    return gulp
        .src('dist/*.css')
        .pipe(
            gulpStylelint({
                fix: true,
                failAfterError: false,
            })
        )
        .pipe(gulp.dest('dist'));
};

/* CLEAN DIST */
exports['clean:dist'] = function cleanDist() {
    return del(['dist']);
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

      Copyright (c) <%= moment().format('YYYY') %> <%= _.capitalize(pkg.author) %>
    `)
        )
        .pipe(gulp.dest('dist'));
};

const build = gulp.series(
    gulp.parallel(exports['clean:dist'], exports['lint:scss']),
    exports['compile:scss'],
    exports['format:css'],
    exports['minify:css'],
    exports['set:header']
);

exports.build = build;
exports.default = build;
