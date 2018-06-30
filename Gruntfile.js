module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    projectName: 'main',

    styleSource: 'src/styles',
    styleDestination: 'dist/styles',
    jsSource: 'src/js',
    jsDestination: 'dist/js',

    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          style: 'expanded',
        },
        files: {
          '<%= styleDestination %>/<%= projectName %>.css':
            '<%= styleSource %>/<%= projectName %>.scss',
        },
      },
      prod: {
        options: {
          style: 'compressed',
        },
        files: {
          '<%= styleDestination %>/<%= projectName %>.min.css':
            '<%= styleSource %>/<%= projectName %>.scss',
        },
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [require('autoprefixer')({browsers: 'last 2 versions'})],
      },
      dist: {
        src: '<%= styleDestination %>/*.css',
      },
    },
    browserify: {
      dist: {
        files: {
          '<%= jsDestination %>/<%= projectName %>.js':
            '<%= jsSource %>/<%= projectName %>.js',
        },
        options: {
          transform: [['babelify', {presets: ['@babel/preset-env']}]],
          browserifyOptions: {
            debug: true,
          },
          plugin: [['minifyify', {map: false}]],
        },
      },
    },

    watch: {
      css: {
        files: ['<%= styleSource %>/*.scss'],
        tasks: ['sass', 'postcss'],
      },
      js: {
        files: ['<%= jsSource %>/*.js'],
        tasks: ['browserify'],
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['watch']);
};
