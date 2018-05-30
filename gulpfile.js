'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const pug = require('gulp-pug')
const scss = require('gulp-sass')
const prefix = require('gulp-autoprefixer')

const dev = 'src'
const server = 'dist'

const build_html = function() {
    return gulp.src(dev + '/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(server));
}

const build_css = function() {
    return gulp.src(dev+'/scss/*.scss')
        .pipe(scss())
        .pipe(prefix())
        .pipe(gulp.dest(server+'/css'));
}

gulp.task('watch', function() {
    watch(dev+'/pug/*.pug', build_html);
    watch(dev+'/scss/**/*.scss', build_css);
});

gulp.task('build_html', build_html);
gulp.task('build_css', build_css);