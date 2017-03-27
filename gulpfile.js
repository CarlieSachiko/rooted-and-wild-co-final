var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
  return gulp.src(['src/js/app.js', 'src/**/*.js'])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/js'));
});
