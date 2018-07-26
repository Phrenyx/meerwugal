'use strict';

// import helpers
import fs from 'fs';
import path from 'path';
import pjson from './package.json';
import minimist from 'minimist';

// import gulp and gulp-based plugins
import gulp from 'gulp';
import LoadPlugins from 'gulp-load-plugins';
const plugins = LoadPlugins();

// import browser-sync for live refresh
import browserSync from 'browser-sync';
const bs = browserSync.create();

// load configuration
let config = Object.assign({}, pjson.rtsnConfig);
let argv = process.argv.slice(2);
let args = minimist(argv);
args.serve = (argv.shift() === 'serve');

// check if we can load rtsn's gulp tasks – otherwise load from project root
let taskPath = './node_modules/rtsn/gulp';
if (fs.existsSync(taskPath)) {
  require('babel-register')({
    only: /node_modules\/rtsn/
  });
} else {
  taskPath = './gulp';
}

// load the different tasks
const tasks = fs.readdirSync(taskPath);
for (let file of tasks) {
  if ((/\.(js)$/i).test(file)) {
    const task = file.split('.').shift();
    plugins.util.log(
      `Loading task module ${plugins.util.colors.magenta(task)}`
    );
    const plugin = require(`./${path.join(taskPath, file)}`);
    plugin(gulp, args, plugins, config, bs);
  }
}

// build for production
gulp.task(
  'build',
  gulp.series([
    'images',
    'markup',
    'styles',
    'browserify',
    'vendorCopy',
    'other',
    'critical'
  ])
);

// build for development and serve
gulp.task(
  'serve',
  gulp.series([
    'build',
    gulp.parallel(['browser-sync', 'watch'])
  ])
);

// clean build directory and rebuild
gulp.task('default', gulp.series(['clean', 'build']));
