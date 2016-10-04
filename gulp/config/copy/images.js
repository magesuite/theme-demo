import path from 'path';

import paths from '../../paths';


/**
 *  Configuration for images task.
 */
export default {
    src: [
        // Images except sprites
        path.join( paths.src, 'images/**/*.{gif,png,jpg,webp,svg}' ),
        '!' + path.join( paths.src, 'sprites/png/**/*.{png}' ),
    ],
    dest: path.join( paths.src, 'web/images/' ),
    /**
     * Configuration for imagemin image minifier.
     * @see https://github.com/sindresorhus/gulp-imagemin#imageminoptions
     */
    imagemin: {
    },
};
