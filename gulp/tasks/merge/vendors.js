/*eslint-env node */

import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import gulpif from 'gulp-if';
import uglify from 'gulp-uglify';

import environment from '../../environment';
import settings from '../../config/merge/vendors';

// Indicate if we are running the task the first time in watch mode.
let firstRun = true;

/**
 * Copies vendor files.
 * @return {Promise} Gulp promise for proper task completition timing.
 */
module.exports = function() {
    // If we are in watch mode, add watchers for this task.
    if ( firstRun && environment.watch === true ) {
        firstRun = false;
        this.gulp.watch(
            [
                settings.watch,
            ],
            [
                'merge:vendors',
                browserSync.reload,
            ]
        );
    }

    return this.gulp.src( settings.src )
        .pipe( concat( settings.filename ) )
        .pipe( gulpif( environment.production, uglify( settings.uglify ) ) )
        .pipe( this.gulp.dest( settings.dest ) );
};
