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
  
    copy: {
      main: {
        files: [
          {expand: true,flatten:true, src: ['node_modules/bootstrap/dist/css/bootstrap.css'], dest: 'website/css/', filter: 'isFile'},
        ],
      },
    },

    watch: {
      src: {
        files: ['website/*.html', 'website/css/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy', 'connect:server', 'watch']);
};