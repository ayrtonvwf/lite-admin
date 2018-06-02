'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const pug = require('gulp-pug')
const scss = require('gulp-sass')
const prefix = require('gulp-autoprefixer')

const dev = 'src'
const dist = 'dist'
const docs = 'docs'

const build_html = function() {
    return gulp.src(dev + '/pug/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(docs))
}


const build_css = function() {
    return gulp.src(dev+'/scss/*.scss')
        .pipe(scss())
        .pipe(prefix())
        .pipe(gulp.dest(dist))
}

gulp.task('watch', function() {
    // watch(dev+'/pug/*.pug', build_html)
    watch(dev+'/scss/**/*.scss', build_css)
})

gulp.task('build_html', build_html)
gulp.task('build_css', build_css)