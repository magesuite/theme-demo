import path from 'path';

/**
 * Default paths for a project.
 */
export default {
    /**
     * Path to sources directory relative to gulpfile.babel.js file.
     * @type {String}
     */
    src: 'src/',
    /**
     * Path to distribution directory relative to gulpfile.babel.js file.
     * @type {String}
     */
    dist: path.resolve( '../../../app/design/frontend/creativestyle/magento2-template-boilerplate' ),
    /**
     * Path to temporary directory relative to gulpfile.babel.js file.
     * @type {String}
     */
    tmp: '.tmp/',
};
