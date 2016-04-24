'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');

gulp.task('build:radmvc',['build:modules'],function(){
    return browserify({
        DEBUG:false,
        entries: ['./rad.js'],
        extensions:['.js']
    })
    .bundle()
    .pipe(source('radmvc.min.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build:modules',function(){
   return gulp.src('./src/**/*')
   .pipe(uglify())
   .pipe(gulp.dest('./')) 
});

gulp.task('default',['build:radmvc'],function(){});
