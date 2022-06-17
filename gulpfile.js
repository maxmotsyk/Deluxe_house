const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const clean = require('gulp-clean-css');

function buildStyles() {
   return gulp.src('./scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error',sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(concat("main.css"))
  .pipe(clean())
  .pipe(gulp.dest('./css/'))
};

function watchScss(){
  gulp.watch('./scss/**/*.scss',gulp.series('buildStyles'))
}

exports.buildStyles = buildStyles;
exports.watchScss = watchScss;