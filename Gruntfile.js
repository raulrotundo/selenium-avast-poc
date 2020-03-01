module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    exec: {
      test: {
        // Passing arguments from the command line
        cmd: function (specFile) {
          if (!specFile || !specFile.length) {
            grunt.warn('You need to provide a spec file or directory');
          }
          return 'node ./node_modules/jasmine-node/lib/jasmine-node/cli.js --verbose --captureExceptions --requireJsSetup ./spec-requirejs/requirejs-setup.js ' + specFile
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
};