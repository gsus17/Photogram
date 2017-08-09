// Importa las librerias.
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpRename = require('gulp-rename')

// Tarea encargada de posicionar el archivo index.pug.
gulp.task('index', function () {
    gulp
        .src('src/index.pug')
        .pipe(gulp.dest('www/')
        );
})

// Tarea encargada de posicionar todos los archivos scss en assets con formato ccs.
gulp.task('styles', function (done) {
    gulp.src(['src/**/*.scss'])
        .pipe(sass())
        .pipe(gulpRename('app.css'))
        .pipe(gulp.dest('www/assets/css/'))
})

// Tarea encargada de posicionar todas las imagenes.
gulp.task('imgs', function (done) {
    gulp.src(['src/assets/img/*.jpg', 'src/assets/img/*.png'])
        .pipe(gulp.dest('www/assets/img/'))
})

// Orden de ejecucion de las tareas
gulp.task('default', ['index', 'styles', 'imgs']);