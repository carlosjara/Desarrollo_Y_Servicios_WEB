module.exports = function (grunt) {
    grunt.initConfig({

        connect: {
            server: {
                options: {
                    port: 9090,
                    base: {
                        path: 'website'
                    },
                    open: {
                        target: 'http://localhost:9090'
                    }
                }
            }
        },

        concat: {
            js: {
                src: ['source/js/*.js'],
                dest: 'website/js/app.js',
            },
            css: {
                src: ['source/css/*.css'],
                dest: 'website/css/custom.css',
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/bootstrap/dist/css/bootstrap.css',
                        dest: 'website/css/libraries'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/jquery/dist/jquery.js',
                        dest: 'website/js/libraries'
                    }
                ]
            }
        },

        watch: {
            src: {
                files: ['source/js/*.js', 'source/css/*.css'],
                tasks: ['concat:js', 'concat:css'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat:js', 'concat:css', 'copy', 'connect:server', 'watch']);
};