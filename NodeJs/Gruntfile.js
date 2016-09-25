module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options : {
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
  
    watch: {
      src: {
        files: ['website/*.html', 'website/libraries/css/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect:server', 'watch']);
};