'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const sassify = require('sassify');
const source = require('vinyl-source-stream');
const browserifyInc = require('browserify-incremental');
const watchify = require('watchify');
const browserSync = require('browser-sync').create();
const gutil = require('gulp-util');
const path = require('path');
const watch = require('gulp-watch');

process.env.NODE_ENV = 'development';

function createBundle(){
    return browserify({
        debug:true,
        entries:['./src/todo.js'],
        extensions:['.js','.jsx'],
        paths:['./src'],
        baseDir:'./',
        cache: {},
        packageCache: {},
        fullPaths:true
    })
    .external('react')
    .external('react-dom')
    .external('radmvc')
    .transform(sassify,{
        'auto-inject': true,
        base64Encode: false,
        sourceMap: true,
        includePaths:['./src/sass']
    })
    .transform(babelify,{
        presets:['babel-preset-es2015','babel-preset-react'],
        sourceMaps:true
    })
    .on("error", (e) => gutil.log(e.message))
    .on("file", (file) => {
        gutil.log('\t', gutil.colors.yellow("Building"), gutil.colors.bold(path.relative(__dirname,file)))
    });
}


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
            .transform(babelify,{
                presets:['babel-preset-es2015','babel-preset-react']
            })
            .transform(sassify,{
                'auto-inject': true,
                base64Encode: false,
                sourceMap: true
            });

    return b.bundle()
            .pipe(source('vendor.js'))
            .pipe(gulp.dest('./public'));
})

gulp.task('live',['build:vendor'],function(){
    browserSync.init({
        open: false,
        proxy: "localhost:8181",
        port:8182,
        files: './public/bundle.js'
    });
    
    var bundle = watchify(createBundle())
     .on('update',(file) => {
        gutil.log('Updating ' + file);
        bundle.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public'));
    })
    .on('log', function (msg) {
        gutil.log('watchify: ' + msg);
    });

    watch('./src/sass/mixins/**/*',(file)=>{
        gutil.log('Updating sass mixins');
        bundle.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public'));
    })

    return bundle.bundle()
                 .pipe(source('bundle.js'))
                 .pipe(gulp.dest('./public'));
})

gulp.task('build:bundle',['build:vendor'],function(){
    let b = createBundle();
    browserifyInc(b,{cacheFile:'./bundle.cache'});
    
    return b.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('./public'));
});

gulp.task('default',['build:vendor','build:bundle'],function(){
    
});