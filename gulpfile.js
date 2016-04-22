'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');

gulp.task('build:radmvc',function(){
    return browserify({
        DEBUG:true,
        entries: ['./rad.js'],
        extensions:['.js']
    })
    .transform(babelify,{
        presets:['babel-preset-es2015','babel-preset-react']
    })
    .bundle()
    .pipe(source('radmvc.js'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build:modules',function(){
    let tasks = [];
    tasks.push(gulp.src('./api/**/*').pipe(gulp.dest('./dist/modules/api')));
    tasks.push(gulp.src('./rad.js').pipe(rename('radmvc.js')).pipe(gulp.dest('./dist/modules')));
    
    return Promise.all(tasks);
});

gulp.task('default',['build:radmvc','build:modules'],function(){
    return browserify({
        DEBUG:true,
        entries: ['./test/test.js'],
        extensions:['.js','.jsx'],
        paths:['./test','./dist/modules'],
        external:['radmvc']
    })
    .transform(babelify,{
        presets:['babel-preset-es2015','babel-preset-react']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./test'));
    
});
