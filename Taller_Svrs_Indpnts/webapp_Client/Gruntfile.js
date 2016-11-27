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
                },
                {
                    src:'public/js/utils/bookmarks2.js',
                    flatten: true,
                    expand: true,
                    dest:'public/js/custom'
                }]
            }
    },
    /**
     *
     */
    concat: {
        basic: {
          src: ['public/utils/constants.js','public/utils/utils.js','public/utils/server_access.js', 'public/utils/draw_utils.js','public/utils/main.js' ],
          dest: 'public/js/custom/bookmarks2.js',
        },
    },
    /**
     *
     */
    express:{
  			all:{
  				options:{
  					port:3001,
  					hostname:'localhost',
  					bases:['./public'],
  					livereload:true
  				}
  			}
  		},
    /**
     *
     */
    watch: {
      src: {
        files: ['public/*.html', 'public/css/*.css','public/js/custom/*.css'],
        options: {
          livereload: true
        }
      }
    },
    /**
     *
     */
    obfuscator_node: {
            default_options: {
                options: {
                    strings: true,
                    compressor : {
                        conditionals: false,
                        evaluate: true,
                        booleans: true,
                        loops: true,
                        unused: false,
                        hoist_funs: false
                    }
                },
                files: [{
                    cwd: '.',
                    src: ['public/js/custom/*.js','public/js/libraries/*.js'],
                    dest: './',
                    expand: true,
                    cache : false
                }]
            }
    },

    /**
     *
     */
    nodemon: {
      dev: {
        script: 'app.js'
      }
    }
    });
    /**
     *
     */
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');

    grunt.loadNpmTasks('grunt-obfuscator-node');
    grunt.loadNpmTasks('grunt-nodemon');
    /**
     *
     */
    grunt.registerTask('default', ['concat','copy',/*,'obfuscator_node'*/'express','watch']);
};
