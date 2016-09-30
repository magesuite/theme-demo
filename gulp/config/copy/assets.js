import path from 'path';

import paths from '../../paths';

/**
 * Returns configuration for copying assets that don't need any processing.
 */
export default {
    watch: [
        // Fonts.
        path.join( paths.src, '**/*.{ttf,woff,woff2,eot}' ),
        // JSON except data for templates.
        path.join( paths.src, '**/*.json' ),
        '!' + path.join( paths.src, '**/*.data.json' ),
    ],

    src: [
        // Fonts.
        path.join( paths.src, '**/*.{ttf,woff,woff2,eot}' ),
        // JSON except data for templates.
        path.join( paths.src, 'src', '**/*.json' ),
        '!' + path.join( paths.src, 'src', '**/*.data.json' ),
    ],
    dest: paths.dist,
};
