const gulp = require('gulp');
const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const clean = require('gulp-clean'); 

gulp.task('default', () => {
  return gulp.src('src/images/*')
    .pipe(imageResize({ 
        width : 1000
    }))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function () {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});