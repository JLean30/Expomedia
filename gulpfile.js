var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    livereload= require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass.sync({outputStyle: 'compressed'}).on('error',sass.logError))
        .pipe(livereload())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('sass/style.scss', ['sass']);
});