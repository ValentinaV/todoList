var gulp = require('gulp'),
    sass = require('gulp-sass');
//var plumber = require('gulp-plumber');
//var watch = require('gulp-watch');

gulp.task('sass', function () {
gulp.src('src/scss/main.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(gulp.dest('./public'));
});

gulp.task('default', function() {
    gulp.run( 'sass');
    /*gulp.watch('src/scss/**', function(event) {
    gulp.run('sass');
    })*/
});