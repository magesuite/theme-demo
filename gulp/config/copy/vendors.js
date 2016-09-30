import path from 'path';

import paths from '../../paths';

/**
 * Config for vendor JS files compilation task.
 */
export default {
    src: [
        path.join( paths.src, 'vendors/**/_*.js' ),
    ],
    dest: paths.dist,
    filename: 'vendors.js',
};
