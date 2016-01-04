var gulp = require('gulp');
var source = require('vinyl-source-stream');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var reactify = require('reactify');

var shell = require('gulp-shell');
var react = require('gulp-react');

var paths = {
  'js_source': {
    graph: 'src/js/graph/',
    maps: 'src/js/maps/',
    canvas: 'src/js/canvas/',
    react: 'src/js/views/'
  },
  'js_test': 'test/',
  'js_build': 'build/',
  'js_dist': 'assets/js/'
};

gulp.task('env-dev', function() {
  process.env.NODE_ENV = 'development';
});

gulp.task('env-prod', function() {
  process.env.NODE_ENV = 'production';
});

gulp.task('lint', function() {
  return gulp.src([
    paths.js_source.graph + '*.js',
    paths.js_source.maps + '*.js',
    paths.js_source.canvas + '*.js',
    'gulpfile.js'
  ])
  .pipe(jshint({ esnext: true }))
  .pipe(jshint.reporter('default', { verbose: true }))
  .pipe(jshint.reporter('fail'));
});

gulp.task('test', shell.task([
  'npm test'
]));

gulp.task('transform', function() {
   return gulp.src(paths.js_source.react + '*.jsx')
    .pipe(react())
    .pipe(gulp.dest(paths.js_build));
});

gulp.task('build', function() {
  return browserify(paths.js_build + 'main.js')
    .transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest(paths.js_dist));
});

gulp.task('default', function() {
  gulp.watch([
      paths.js_source.react + '*.jsx',
      paths.js_source.graph + '*.js',
      paths.js_source.maps + '*.js',
      paths.js_source.canvas + '*.js'
    ],
    ['env-dev', 'transform', 'build']
  ).on('error', function(error) {
    console.log(error.toString());
  });
});

gulp.task('development', ['env-dev', 'lint', 'test', 'transform', 'build']);
gulp.task('production', ['env-prod', 'lint', 'test', 'transform', 'build']);
gulp.task('pre-commit', ['production']);

gulp.task('dev', ['development']);
gulp.task('prod', ['production']);
