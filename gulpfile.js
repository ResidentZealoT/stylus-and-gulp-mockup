var gulp = require('gulp');
var stylus = require('gulp-stylus');
var typographic = require('typographic');
var nib = require('nib');

gulp.task('styles', function() {
  gulp.src('./CSS/styles.styl')
    .pipe(stylus({
      use: [typographic(), nib()]
    }))
    .pipe(gulp.dest('./CSS'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.styl', ['styles']);
});
