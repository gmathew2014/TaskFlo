module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app-output.css': 'scss/app.scss'
        }
      }
    },
    autoprefixer: {
      single_file: {
          src:  'css/app-output.css',
          dest: 'css/app.css'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: ['scss/**/*.scss', 'scss/*.scss'],
        tasks: ['sass', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build', 'watch']);
}