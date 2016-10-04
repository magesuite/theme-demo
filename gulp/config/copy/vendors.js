import path from 'path';

import paths from '../../paths';

/**
 * Config for vendor JS files compilation task.
 */
export default {
    src: [
        path.join( paths.src, 'vendors/**/*.js' ),
        '!' + path.join( paths.src, 'vendors/**/_*.js' ),
    ],
    // Uglify settings.
    // @see https://www.npmjs.com/package/gulp-uglify#options
    uglify: {
    },
    dest: path.join( paths.dist, 'web/' ),
};
