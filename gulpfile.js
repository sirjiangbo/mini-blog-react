const gulp = require('gulp');
const stylus = require('gulp-stylus');
const css = require('gulp-css');

gulp.task('css', function() {
    return gulp.src('./public/src/stylus/admin.styl')
        .pipe(stylus())
        .pipe(css())
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('default', ['css']);
