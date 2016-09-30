/**
 *  redcoon's Gulp tasker configuration
 */
import gulp from 'gulp';
import path from 'path';
import loadTasks from 'gulp-task-loader';
import sequence from 'run-sequence';

/**
 * Load tasks from gulp/tasks directory using gulp-task-loader.
 * @see https://github.com/hontas/gulp-task-loader
 */
loadTasks( path.join( 'gulp', 'tasks' ) );
/**
 *  Task for building entire project.
 */
gulp.task( 'build', ( callback ) => {
    sequence( 'templates:twig', [
        'fonts',
        'json',
        'scripts:compile',
        'scripts:vendors',
        'scripts:copy',
        'sprites:png',
        'images',
        'sprites:svg',
        'templates:copy'
    ], 'styles:compile', 'namespace', callback );
} );

/**
 *  Task for cleaning and building entire project.
 */
gulp.task( 'compile', ( callback ) => {
    sequence( 'clean', 'build', callback );
} );

/**
 *  Task for project linting.
 */
gulp.task( 'lint', ( callback ) => {
    sequence( [ 'scripts:lint', 'styles:lint' ], callback );
} );

/**
 *  Task that fires project linting on every commit attempt.
 */
gulp.task( 'pre-commit', ( callback ) => {
    sequence( 'lint', callback );
} );

/**
 *  Default task
 */
gulp.task( 'default', [ 'compile' ] );

/**
 * Full production gulp command for everything and copy for parent Project
 *
 * Compile the Scripts and CSS, copy the templates to view directory
 */
gulp.task( 'prod', ( callback ) => {
    sequence( 'clean', 'clean_prod', 'build', 'namespace',
        [
            'scripts:copy_compiled',
            'styles:copy_compiled',
            'templates:copy_compiled',
            'images:copy_compiled',
            'fonts:copy_compiled'
        ], callback );
} );

