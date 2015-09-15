var gulp = require('gulp');
var source = require('vinyl-source-stream');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var tape = require('gulp-tape');

var shell = require('gulp-shell');

var paths = {
    'js_source': 'js/graph/',
    'js_test': 'js/test/',
    'js_dist': 'dist/'
};

gulp.task('env-dev', function() {
    process.env.NODE_ENV = 'development';
});

gulp.task('env-prod', function() {
    process.env.NODE_ENV = 'production';
});

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

gulp.task('test', shell.task([
    'tape ' + paths.js_test + '* | faucet',
]));

gulp.task('test-debug', function() {
    return gulp.src(paths.js_test + '/*.js')
        .pipe(tape());
});

gulp.task('build', function() {
if (true) return;

    return browserify(paths.js_source + 'main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.js_dist));
});

gulp.task('default', ['env-dev', 'lint', 'test', 'build']);
gulp.task('production', ['env-prod', 'lint', 'test', 'build']);
gulp.task('pre-commit', ['production']);
