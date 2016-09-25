module.exports = function(grunt) {
  
  grunt.initConfig({
    connect: {
      server: {
        options : {
          port: 9090,
          open: {
            target: 'http://localhost:9090'
          }
        }
      }
    },

    express: {
      dev: {
        options:{
          script: 'express.js'
        }
      },
    },
  
    copy: {
      main: {
        files: [
          {expand: true,flatten:true, src: ['node_modules/bootstrap/dist/css/bootstrap.css'], dest: 'website/css/', filter: 'isFile'},
        ],
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'website/css/custom.css': ['website/css/Proyecto.css', 'website/css/Mapa.css', 'website/css/Hobbies.css', 'website/css/style.css', 'website/css/CvLayout.css'],
          'website/css/libreries.css': ['bootstrap.css'],
        }
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['website/css/custom.css', 'website/css/libreries.css']
      },
      lax: {
        options: {
          import: false
        },
        src: ['website/css/*.css']
      }
    },

    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          'dist/Hobbies.html': 'website/Hobbies.html',     // 'destination': 'source' 
          'dist/index.html': 'website/index.html',
          'dist/Mapa.html': 'website/Mapa.html',
          'dist/Perfil.html': 'website/Perfil.html',
          'dist/Proyectos.html': 'website/Proyectos.html'
        }
      }
    },

    watch: {
      src: {
        files: ['*.html','website/*.html', 'website/css/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['copy', 'cssmin', 'csslint','htmlmin','connect:server', 'watch']);
};