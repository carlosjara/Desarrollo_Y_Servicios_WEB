module.exports = function(grunt) {
  
  grunt.initConfig({
    connect: {
      server: {
        options : {
          port: 9090,
          base: 'public_html',
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
          {expand: true,flatten:true, src: ['node_modules/bootstrap/dist/css/bootstrap.css'], dest: 'public_html/css/', filter: 'isFile'},
        ],
      },
    },

    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1,
        keepSpecialComments: 0
      },
      target: {
        files:[{'public_html/css/custom.css': ['resource/css/style.css','resource/css/perfil.css','resource/css/proyectos.css','resource/css/Hobbies.css']},
               {'public_html/css/libraries.css':['resource/css/bootstrap.css']}
              ]
      }
    },

    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['public_html/css/custom.css']
      },
    },  

    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // 'destination': 'source' 
          'public_html/index.html': 'public_html/index.html',
          'public_html/perfil.html': 'public_html/perfil.html',
          'public_html/proyectos.html': 'public_html/proyectos.html',
          'public_html/Hobbies.html': 'public_html/Hobbies.html'
        }
      }
    },

    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /style.css/g,
              replacement: function () 
                {
                  return 'custom.css';
                }
            },
            {
              match: /perfil.css/g,
              replacement: function () 
                {
                  return 'custom.css';
                }
            },
            {
              match: /Hobbies.css/g,
              replacement: function () 
                {
                  return 'custom.css';
                }
            },
            {
              match: /proyectos.css/g,
              replacement: function () 
                {
                  return 'custom.css';
                }
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['resource/index.html','resource/perfil.html','resource/proyectos.html','resource/Hobbies.html'], dest: 'public_html/'}
        ]
      }
    },

    watch: {
      src: {
        files: ['public_html/*.html', 'public_html/css/*.css', 'resource/*.html', 'resource/css/*.css'],
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
  grunt.loadNpmTasks('grunt-replace');

  grunt.registerTask('default', ['copy', 'cssmin', 'csslint','replace','htmlmin','express', 'watch']);
};