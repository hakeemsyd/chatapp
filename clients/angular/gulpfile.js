'use strict';

/* jshint node: true */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var nodemon = require('gulp-nodemon');

var jsFiles = ['start.js','gulpfile.js','app/app.js','app/services/*.js', 'app/controllers/*.js'];

gulp.task('style', function(){
   return gulp.src(jsFiles)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish', {
                verbose: true
            }))
            .pipe(jscs());
});

gulp.task('inject', function(){
   var wiredep = require('wiredep').stream;
   var inject = require('gulp-inject');

   var injectSrc = gulp.src(['./app/assets/css/*.css', './app/app.js','./app/services/*.js', './app/controllers/*.js'],{read: false});
   var injectOptions = {
     ignorePath: 'app/',
     addRootSlash: false
   };

   var options = {
        bowerJson: require('./bower.json'),
        directory: 'app/bower_components'
   };

   return gulp.src('./app/index.jade')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./app'));
});

gulp.task('serve', ['style', 'inject'], function(){
    var options = {
        script: 'start.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function(ev){
            console.log('Restarting....');
        }); 
});
