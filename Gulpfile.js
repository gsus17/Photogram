// Importa las librerias.
var gulp = require('gulp');
var sass = require('gulp-sass');
var gulpRename = require('gulp-rename')
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var changed = require('gulp-changed');
var tsProject = typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

// Tarea encargada de posicionar el archivo index.pug.
gulp.task('index', function () {
    gulp
        .src('src/index.pug')
        .pipe(gulp.dest('www/')
        );
})

// Tarea encargada de posicionar todas las imagenes.
gulp.task('imgs', function (done) {
    gulp.src(['src/assets/img/*.jpg', 'src/assets/img/*.png'])
        .pipe(gulp.dest('www/assets/img/'))
})

gulp.task('system', function (done) {
    gulp.src(['node_modules/systemjs/dist/system.js'])
        .pipe(gulp.dest('www/vendor/systemjs/'))
})

gulp.task('page', function (done) {
    gulp.src(['node_modules/page/page.js'])
        .pipe(gulp.dest('www/vendor/page/'))
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

/**
 * sass
 * Compila los sass a css.
 */
gulp.task('sass', function (done) {
    gulp.src(['src/**/*.scss'])
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('www'))
        .on('end', done);
});

/**
 * compile-scripts
 * Compila los fuentes de los archivos TS a JS 
 * e incluye los .map para facilitar el debug de la aplicación.
 */
gulp.task('compile-scripts', function () {
    return gulp.src([
        'src/**/*.ts',
        '!src/**/*.templates.ts',
        '!src/**/*.i18n.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('/', {
            includeContent: true
        }))
        .pipe(gulp.dest('www'));
});

/**
 * scripts-js
 * Copia los archivos del tipo JS de fuentes a la carpeta www.
 */
gulp.task('scripts-js', function () {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('www'));
});


/**
 * views-debug
 * Copia las vistas a la carpeta www.
 */
gulp.task('views-debug', function () {
    return gulp.src('src/**/*.html')
        .pipe(changed('www'))
        .pipe(gulp.dest('www'));
});

/**
 * annotate-scripts
 * Ejecuta: compile-scripts
 * Anota los archivos JS resultantes que sean modulos 
 */
gulp.task('annotate-scripts', ['compile-scripts'], function () {
    return gulp.src([
        '!www/vendor/**/*.js',
        'www/**/*module.js'
    ])
        .pipe(gulp.dest('www'));
});

/**
 * scripts-debug
 * Ejecuta: annotate-scripts.
 * Compila los TS como JS y los anota para que se injecten 
 * correctamente las dependencias en tiempo de ejecución.
 */
gulp.task('scripts-debug', ['annotate-scripts'], function () {
    return gulp.src([
        'src/**/*.templates.ts',
        'src/**/*.i18n.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(gulp.dest('www'));
});

// Orden de ejecucion de las tareas
gulp.task('default', ['sass', 'scripts-debug', 'scripts-js', 'views-debug', 'system', 'page', 'favicon', 'imgs', 'index']);