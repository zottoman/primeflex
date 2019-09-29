var gulp = require('gulp'),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task("sass", function() {
    // log("Generate CSS files " + (new Date()).toString());
    gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
                    .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
        .pipe(gulp.dest("dist"))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
  // place code for your default task here
});