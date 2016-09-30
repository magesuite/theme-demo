/**
 * Settings for serve task.
 */
export default {
    /**
     * BrowserSync configuration.
     */
    browserSync: {
        notify: false,
        port: 9000,
        server: {
            baseDir: [ 'dist' ],
            directory: true,
        },
    },
};
