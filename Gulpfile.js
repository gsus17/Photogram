var gulp = require('gulp')
var sass = require('gulp-sass')
var gulpRename = require('gulp-rename')

gulp.task('styles', function () {
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(gulpRename('app.css'))
        .pipe(gulp.dest('assets/css')  
    );
})

gulp.task('default', ['styles']);