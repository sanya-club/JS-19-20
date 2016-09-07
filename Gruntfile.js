module.exports = function (grunt) {


  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/css/style.css': 'src/scss/style.scss'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/scss/*.scss'],
        tasks: ['sass'],
      },
    },
    uglify: {
      options: {

      },
      dist: {
        src: ['src/js/script.js'],
        dest: 'build/js/script.min.js',
      },
    },
    cssmin: {
      options: {

      },
      dist: {
        src: ['src/css/style.css'],
        dest: 'build/css/style.min.css',
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/', // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match 
          dest: 'build/'
        }]
      }
    },

  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', [
    'sass',
    'watch',
    'uglify',
    'cssmin',
    'imagemin'
  ]);
};