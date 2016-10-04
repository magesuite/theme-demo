import path from 'path';

import paths from '../../paths';

/**
 * Returns configuration for copying miscellaneous files that don't need any processing.
 */
export default {
    watch: [
        // JSON except data for templates.
        path.join( paths.src, '**/*.json' ),
        // PHP files
        path.join( paths.src, '**/*.php' ),
        // XML files
        path.join( paths.src, '**/*.xml' ),
        // CSV files
        path.join( paths.src, '**/*.csv' ),
    ],

    src: [
        // JSON except data for templates.
        path.join( paths.src, 'src', '**/*.json' ),
        // PHP files
        path.join( paths.src, '**/*.php' ),
        // XML files
        path.join( paths.src, '**/*.xml' ),
        // CSV files
        path.join( paths.src, '**/*.csv' ),
    ],
    dest: paths.dist,
};
