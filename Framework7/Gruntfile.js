module.exports = function(grunt) {

  grunt.initConfig({

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
    nodemon: {
      dev: {
        script: 'app.js'
      }
    }
    });
    /**
     *
     */
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.loadNpmTasks('grunt-nodemon');
    /**
     *
     */
    grunt.registerTask('default', ['express','watch']);
};
