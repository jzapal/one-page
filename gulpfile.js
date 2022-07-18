const { series } = require('gulp');

var gulp = require('gulp');
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');

function build (){
  return gulp.src('index.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
}
function fonts () {
  return gulp.src('assets/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
}


exports.default = series(build, fonts);
