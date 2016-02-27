var gulp = require('gulp')
var source = require('vinyl-source-stream')
var sass = require('gulp-sass')
var browserify = require('browserify')
var babelify = require('babelify')
var rename = require('gulp-rename')
var path = require('path')

gulp.task('browserify', () => {
  var bundleStream = browserify(path.join(__dirname, '/src/components/jsx/App.jsx'), {extensions: ['.jsx']})
  .transform(babelify, {presets: ['es2015', 'react']})
  .bundle()

  bundleStream
  .pipe(source('main.jsx'))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(path.join(__dirname, '/public/scripts')))

})


gulp.task('sass', () =>
   gulp.src(path.join(__dirname, '/src/scss/*.scss'))
    .pipe(sass())
    .pipe(gulp.dest(path.join(__dirname, '/public/stylesheets')))
)

gulp.task('watch', () => {
  gulp.watch(path.join(__dirname, '/src/components/jsx/*.jsx'), ["browserify"])
  gulp.watch(path.join(__dirname, '/src/scss/', 'style.scss'))
})

gulp.task('default', ['browserify','sass', 'watch'])
