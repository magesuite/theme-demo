import path from 'path';

import paths from '../../paths';

/**
 * Returns configuration for copying assets that don't need any processing.
 */
export default {
    watch: [
        path.join( paths.src, '**/*.twig' ),
        path.join( paths.src, '**/*.data.json' ),
    ],

    src: path.join( paths.src, '**/*.twig' ),
    dest: paths.dist,
    twig: {
        errorLogToConsole: true,
        functions: [
            {
                /**
                 * Simple asset helper function which returns path inside "dist" directory.
                 * Its purpose is just to allow different backends to implement it with
                 * different paths to assets.
                 * @type {String} Desired path to asset inside "dist" directory.
                 */
                name: 'asset',
                func: ( assetPath ) => assetPath,
            },
        ],
    },
};

