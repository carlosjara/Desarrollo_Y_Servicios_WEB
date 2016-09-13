module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      build: {
        files : [
          { expand: true, flatten: true, src: 'node_modules/bootstrap/dist/css/bootstrap.css', dest: 'public/stylesheets' }
        ]
      }
    },
     exec: {
        start: {
            cmd: 'npm start'
        }
    }
});

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');


  grunt.registerTask('default', ['copy', 'exec:start']);
};