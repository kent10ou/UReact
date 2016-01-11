var gulp = require('gulp'); // responsible for build process
var gutil = require('gulp-util'); // responsible for console.log output of build process, for debugging
var source = require('vinyl-source-stream'); 
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
})
