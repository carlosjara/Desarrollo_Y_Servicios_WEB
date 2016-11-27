module.exports = function(grunt) {

  grunt.initConfig({

    /**
     * Copy depedencies from to express published repository.  
     */
    copy: {
        build: {
            files :
                [{
                    src:'node_modules/bootstrap/dist/css/bootstrap.css',
                    flatten: true,
                    expand: true,
                    dest:'public/css'
                },
                {
                    src:'node_modules/jquery/dist/jquery.js',
                    flatten: true,
                    expand: true,
                    dest:'public/js/libraries'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};