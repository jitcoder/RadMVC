'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const streamify = require('gulp-streamify');
const sassify = require('sassify');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');

gulp.task('build:bundle',function(){
    return browserify({
        DEBUG:false,
        entries:['./todo.js'],
        extensions:['.js','.jsx','.scss'],
        paths:['./']
    })
    .transform(sassify,{
      'auto-inject': true,
      base64Encode: false,
      sourceMap: false
    })
    .transform(babelify({
        presets:['babel-preset-es2015','babel-preset-react']
    }))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./public'));
});

gulp.task('default',function(){
    
});