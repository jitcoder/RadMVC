'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const sassify = require('sassify');
const source = require('vinyl-source-stream');
const browserifyInc = require('browserify-incremental');

process.env.NODE_ENV = 'development';

gulp.task('build:vendor',function(){
    let b = browserify({
                debug:true,
                extensions:['.js','.jsx'],
                paths:['./src'],
                baseDir:'./',
                require:['react','react-dom','radmvc'],
                cache: {},
                fullPaths:true
            })
            .transform(sassify,{
                'auto-inject': true,
                base64Encode: false,
                sourceMap: true
            })
            .transform(babelify,{
                presets:['babel-preset-es2015','babel-preset-react']
            });
    
    //browserifyInc(b,{cacheFile:'./vendor.cache'});
    
    return b.bundle()
            .pipe(source('vendor.js'))
            .pipe(gulp.dest('./public'));
})

gulp.task('build:bundle',['build:vendor'],function(){
    let b = browserify({
        debug:true,
        entries:['./src/todo.js'],
        extensions:['.js','.jsx'],
        paths:['./src'],
        baseDir:'./',
        external:['react','react-dom','radmvc'],
        cache: {},
        fullPaths:true
    })
    .transform(sassify,{
        'auto-inject': true,
        base64Encode: false,
        sourceMap: true
    })
    .transform(babelify,{
        presets:['babel-preset-es2015','babel-preset-react'],
        sourceMaps:true
    });
    
    browserifyInc(b,{cacheFile:'bundle.cache'});
    
    return b.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./public'));
});

gulp.task('default',['build:bundle'],function(){
    
});