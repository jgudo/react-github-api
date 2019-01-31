const gulp = require('gulp');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');


gulp.task('styles', function(){
  return gulp.src('src/css/*.css')
  .pipe(csso())
  .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('scripts', function() {
  return gulp.src('src/js/*.js').
      pipe(babel({
          // presets: ['@babel/preset-env'],
          plugins: [
            'transform-react-jsx', 
            '@babel/proposal-class-properties'
          ]
      }))
      // .pipe(uglify())
      .pipe(gulp.dest('dist/assets/js'));
});

gulp.task('default', function() {
  gulp.watch('src/js/*.js', gulp.parallel('scripts'));
  gulp.watch('src/css/*.css', gulp.parallel('styles'));
});



