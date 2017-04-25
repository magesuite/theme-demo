/* eslint-env node */
/* eslint no-sync: 0 */
import { rollup } from 'rollup';
import notifier from 'node-notifier';
import browserSync from 'browser-sync';

import environment from '../../environment';
import settings from '../../config/build/scripts';
// Indicate if we are running the task the first time in watch mode.
let firstRun = true;

/**
 * Task for compiling components' JS files.
 * @return {Promise} Promise used to properly time task execution completition.
 */
module.exports = function() {
    // Initiate watch only the first time.
    if ( firstRun && environment.watch === true ) {
        firstRun = false;
        this.gulp.watch(
            [
                settings.watch,
            ],
            [
                'build:scripts',
                browserSync.reload,
            ]
        );
    }
    return rollup( settings.rollup ).then( ( bundle ) =>
        bundle.write( settings.rollupBundle )
    ).catch( ( error ) => {
        notifier.notify( {
            'title': 'Scripts Compilation Error',
            'message': error.message,
        } );

        return Promise.reject( error );
    } );
};
