var gulp = require('gulp'); // responsible for build process
var gutil = require('gulp-util'); // responsible for console.log output of build process, for debugging
var source = require('vinyl-source-stream'); // vinyl-source-stream convert the readable stream you get from browserify into a vinyl stream that is what gulp is expecting to get.
var browserify = require('browserify'); // responsible for figuring out one part of code depends on another, make sure load order is correct
var watchify = require('watchify'); // automatically rerun gulp file when code changes
var reactify = require('reactify'); // runs in conjunction with browserify to convert jsx to js

gulp.task('default', function () { // tell gulp we have a task
	// create bundler, responsible for running browserify on our code base
	var bundler = watchify(browserify({ //browserify takes an object
		entries: ['./src/app.jsx'], // pass in the starting point of our application, most parent component
		transform: [reactify], // tells browserify, while it's figuring out our dependencies, it also needs to transform (compile) our jsx to js using reactify module
		extensions: ['.jsx'], // specify the extensions
		debug: true, // boiler plate
		cache: {}, // boiler plate
		packageCache: {}, // boiler plate
		fullPaths: true  // boiler plate
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
