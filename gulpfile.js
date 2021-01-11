var gulp                = require("gulp");
var sass                = require('gulp-sass');
var browserSync         = require('browser-sync').create();

var autoprefixer        = require('gulp-autoprefixer');
var sourcemaps          = require   ('gulp-sourcemaps');
var postcss = require('gulp-postcss');

var minify = require('gulp-minify-css');

// Specific Task
function js() {
    return gulp
    .src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
}
gulp.task(js);

// Specific Task
function gulpSass() {
    var contextOptions = { modules: true };
    return gulp
    .src(['src/scss/*.scss'])
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'ie8','ie9'))
    .pipe(sourcemaps.write())
    
    //.pipe(minify())
    
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
}
gulp.task(gulpSass);

// Run multiple tasks
gulp.task('start', gulp.series(js, gulpSass));