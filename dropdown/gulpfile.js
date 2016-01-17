var gulp = require('gulp'); // responsible for build process
var gutil = require('gulp-util'); // responsible for console.log output of build process, for debugging
var source = require('vinyl-source-stream'); // vinyl-source-stream convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get.
var browserify = require('browserify'); // responsible for figuring out one part of code depends on another, make sure load order is correct
var watchify = require('watchify'); // automatically rerun gulp file when code changes
var reactify = require('reactify'); // runs in conjunction with browserify to convert jsx to js

gulp.task('default', function () {
	// create bundler
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify], 
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}))

	function build (file) {
		if (file) gutil.log('Recompiling' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error'))
			.pipe(source('main.js'))
			.pipe(gulp.dest('./'));
	};
	build();
	bundler.on('update', build);
});
