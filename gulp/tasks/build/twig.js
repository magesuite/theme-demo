/*eslint-env node */

import path from 'path';
import twig from 'gulp-twig';
import data from 'gulp-data';
import notifier from 'node-notifier';
import browserSync from 'browser-sync';
import util from 'gulp-util';

import environment from '../../environment';
import settings from '../../config/build/twig';

// Indicate if we are running the task the first time in watch mode.
let firstRun = true;

/**
 * Compiles template files.
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
                'build:twig',
                browserSync.reload,
            ]
        );
    }

    return this.gulp.src( settings.src )
        .pipe( data( ( file ) => {
            // Load corresponding (template-name).data.json file for Twig.
            /*eslint global-require: 0, prefer-reflect: 0*/
            const template = path.dirname( file.path ) +
                '/' + path.basename( file.path, 'twig' ) + 'data.json';
            delete require.cache[ template ];
            let data = {};
            try {
                data = require( template );
            } catch ( error ) {
                if ( error.code !== 'MODULE_NOT_FOUND' ) {
                    notifier.notify( {
                        'title': 'Twig Data Error',
                        'message': error.message,
                    } );
                    if ( environment.watch ) {
                        util.log( error.message );
                    } else {
                        throw error;
                    }
                }
            }

            return data;
        } ) )
        .pipe( twig(
            settings.twig
        ) )
        .on( 'error', function( error ) {
            notifier.notify( {
                'title': 'Twig Compilation Error',
                'message': error.message,
            } );
            if ( environment.watch ) {
                util.log( error.message );
                this.emit( 'end' );
            } else {
                throw error;
            }
        } )
        .pipe( this.gulp.dest( settings.dest ) );
};

