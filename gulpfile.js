'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const pug = require('gulp-pug');
const scss = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

const dev = 'src';
const server = 'dist';

gulp.task('watch', function() {
    watch(dev+'/pug/*.pug', function () {
        return gulp.src(dev+'/pug/*.pug')
            .pipe(pug())
            .pipe(gulp.dest(server))
            .pipe(browserSync.stream());
    });

    watch(dev+'/scss/**/*.scss', function () {
        return gulp.src(dev+'/scss/*.scss')
            .pipe(scss())
            .pipe(prefix())
            .pipe(gulp.dest(server+'/css'))
            .pipe(browserSync.stream());
    });

    browserSync.init({
        server: {
            baseDir: server
        }
    });
});
