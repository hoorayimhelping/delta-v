var gulp = require('gulp');
var source = require('vinyl-source-stream');

var jshint = require('gulp-jshint');
var browserify = require('browserify');
var reactify = require('reactify');

var tape = require('gulp-tape');

var shell = require('gulp-shell');
var react = require('gulp-react');

var paths = {
    'js_source': {
        graph: 'js/graph/',
        maps: 'js/maps',
        canvas: '/js/canvas'
    },
    'js_test': 'js/test/',
    'js_dist': 'js/',
    'react_source': 'js/views/',
    'react_dist': 'js/views/'
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
            paths.js_test + '*.js',
            'gulpfile.js'
    ])
    .pipe(jshint({ esnext: true }))
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

gulp.task('transform', function() {
    return gulp.src(paths.react_source + '*.jsx')
        .pipe(react())
        .pipe(gulp.dest(paths.react_dist));
});

gulp.task('build', function() {
    return browserify(paths.react_dist + 'main.js')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.js_dist));
});

gulp.task('default', function() {
    gulp.watch(
        [
            paths.react_source + '/*.jsx',
            paths.js_source.graph + '*.js',
            paths.js_source.maps + '*.js',
            paths.js_source.canvas + '*.js'
        ],
        ['env-dev', 'transform', 'build']
    );
});

gulp.task('development', ['env-dev', 'lint', 'test', 'transform', 'build']);
gulp.task('production', ['env-prod', 'lint', 'test', 'transform', 'build']);
gulp.task('pre-commit', ['production']);

gulp.task('dev', ['development']);
gulp.task('prod', ['production']);
