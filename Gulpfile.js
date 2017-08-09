// Importa las librerias.
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpRename = require('gulp-rename')
var typescript = require('gulp-typescript');
var tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

// Compila los archivos ts a js.
gulp.task("compiler", function () {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest("www/"));
});

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
// Tarea encargada de posicionar todas las imagenes.
gulp.task('favicon', function (done) {
    gulp.src([
        'src/assets/img/favicon/*.jpg',
        'src/assets/img/favicon/*.png',
        'src/assets/img/favicon/*.ico',
        'src/assets/img/favicon/*.json',
        'src/assets/img/favicon/*.xml'])
        .pipe(gulp.dest('www/assets/img/favicon'))
})

// Orden de ejecucion de las tareas
gulp.task('default', ['compiler', 'index', 'styles', 'imgs', 'favicon']);