'use strict';

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const streamify = require('gulp-streamify');
const fs = require('fs');

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
   .pipe(gulp.dest('./'));
});

gulp.task('build:npm-package',['build:radmvc','build:package-json'],function(){
    let tasks = [];
    
    tasks.push(gulp.src('./rad.js').pipe(gulp.dest('./radmvc/')));
    tasks.push(gulp.src('./lib/**/*').pipe(gulp.dest('./radmvc/lib')));
    tasks.push(gulp.src('./dist/radmvc.min.js').pipe(gulp.dest('./radmvc/dist')));
    return Promise.all(tasks);
});

gulp.task('build:package-json',function(){
    try{
        let pkg = JSON.parse(fs.readFileSync('./package.json'));
        delete pkg.devDependencies;
        fs.writeFileSync('./radmvc/package.json',JSON.stringify(pkg));
        return true;
    }
    catch(e){
        console.log(e.message);
        return false;
    }
});

gulp.task('default',['build:radmvc'],function(){});
