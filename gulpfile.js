const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(styles);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
