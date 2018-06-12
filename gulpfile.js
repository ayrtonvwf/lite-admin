'use strict'

const gulp = require('gulp')
const watch = require('gulp-watch')
const scss = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')

const dev = './src'
const dist = './dist'
const docs = './docs'

const build_css = function() {
    return gulp.src(dev+'/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(prefix())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(dist))
        .pipe(gulp.dest(docs))
}

gulp.task('watch', function() {
    watch(dev+'/scss/**/*.scss', build_css)
})

gulp.task('build_css', build_css)