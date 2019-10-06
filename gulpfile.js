"use strict";

var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var sassFiles = './src/**/*.scss';

gulp.task('clean', function(done) {
  del('dist').then(function() {
    done();
  });
});

gulp.task('sass', function() {
  return gulp.src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 3 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch(sassFiles, gulp.series('sass'));
});

gulp.task('default', gulp.series('clean', 'sass', 'watch'));