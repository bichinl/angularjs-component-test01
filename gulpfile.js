var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static server http://localhost:3000
gulp.task('browser-sync', ['sass','sass-components'], function() {
	browserSync.init({
		server: {
			baseDir: "./",
		},
		open: false
	});

	gulp.watch("scss/**/*.scss", ['sass']);
	gulp.watch("js/components/**/*.scss", ['sass-components']);
	gulp.watch("./**/*.html").on('change', browserSync.reload);
	gulp.watch("js/**/*.js").on('change', browserSync.reload);

});

gulp.task('sass', function() {
	return gulp.src("scss/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
});

gulp.task('sass-components', function() {

	var paths = [
		"js/components/**/*.scss"
	];

	return gulp.src(paths, {base: "./"})
		.pipe(sass())
		.pipe(gulp.dest("./"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
