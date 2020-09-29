var gulp = require('gulp');
var sass = require('gulp-sass');


sass.compiler = require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error',sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('sass:watch', function (){
    gulp.watch('./src/sass/**/*.scss', ['sass']);
});