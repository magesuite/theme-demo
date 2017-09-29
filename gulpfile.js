require('babel-register')({
    // Enable transpilation for node_modules/theme-creativeshop.
    ignore: /node_modules\/(?!theme-creativeshop)/,
});

const path = require('path');
const loadTasks = require('gulp-task-loader');
loadTasks(path.join('node_modules', 'theme-creativeshop/gulp/tasks'));

/**
 * Inherit tasks from CreativeShop's gulpfile.
 */
require('theme-creativeshop/gulpfile.babel');
