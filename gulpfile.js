var gulp = require('gulp');
var source = require('vinyl-source-stream');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var tape = require('gulp-tape');

var paths = {
    'js_source': 'js/src/',
    'js_test': 'js/test/',
    'js_dist': 'dist/'
};

gulp.task('lint', function() {
    return gulp.src([
            paths.js_source + '*.js',
            paths.js_test + '*.js',
            'gulpfile.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default', { verbose: true }))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function() {
    return gulp.src(paths.js_test + '/*.js')
        .pipe(tape());
});

gulp.task('build', function() {
    return browserify(paths.js_source + 'main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.js_dist));
});

gulp.task('default', ['lint', 'test', 'build']);
