import path from 'path';

import paths from '../../paths';

/**
 * Returns configuration for copying assets that don't need any processing.
 */
export default {
    watch: [
        path.join( paths.src, '**/*.twig' ),
    ],

    src: path.join( paths.src, '**/*.twig' ),
    dest: paths.dist,
};

