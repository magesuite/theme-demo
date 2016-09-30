import path from '../../paths';

/**
 * Cleaning task settings.
 */
export default {
    /**
     * Paths that should be deleted.
     */
    src: [
        path.join( path.dist, '**/*' ),
        path.join( path.tmp, '**/*' ),
    ],
};
