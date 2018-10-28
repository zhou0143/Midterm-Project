var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-ruby-sass');


gulp.task('run', function(){
    browserSync.init({
        server: './src',
    });
    
    gulp.watch('src/css/index.scss', ['sasstask']);
});

gulp.task('sasstask', function(){
    return sass('src/css/index.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

// build project
gulp.task('over', function(){
    gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css/'));

    gulp.src('src/css/image/*')
    .pipe(gulp.dest('dist/css/image/'));

    gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img/'));

    gulp.src('src/js/*')
    .pipe(gulp.dest('dist/js/'));

    gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});













