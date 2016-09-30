import path from 'path';

import paths from '../../paths';


/**
 *  Configuration for images task.
 */
export default {
    src: [
        // Images except sprites
        path.join( paths.src, '**/*.{gif,png,jpg,webp}' ),
        '!' + path.join( paths.src, 'sprites/png/**/*.{png}' ),
    ],
    dest: path.join( paths.src, 'images/' ),
    /**
     * Configuration for imagemin image minifier.
     * @see https://github.com/sindresorhus/gulp-imagemin#imageminoptions
     */
    imagemin: {
    },
};
