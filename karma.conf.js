module.exports = function(config) {
    'use strict';

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'bower_components/jquery/dist/jquery.min.js',
            'bower_components/lodash/dist/lodash.min.js',
            'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

            //'bower_components/brwsrfy-metrics/dist/brwsrfy-metrics.js',
            'bower_components/countonmejs/src/main/countonmejs.js',

            'bower_components/vissense/dist/vissense.min.js',

            'src/main/metrics/vissense.metrics.js',

            'spec/**/*.js',
            // fixtures
            {pattern: 'spec/**/*.html', watched: true, served: true, included: false}
        ],

        exclude: [
        ],

        reporters: ['progress', 'coverage'],

        port: 3000,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        preprocessors: {
          'src/main/**/*.js': ['coverage']
        },

        browsers: ['PhantomJS', 'Chrome'],
        //browsers: ['PhantomJS'],

        customLaunchers: {
          Chrome_without_security: {
            base: 'Chrome',
            flags: ['--disable-web-security']
          }
        },

        coverageReporter: {
            reporters:[
              {type: 'lcov', dir:'bin/coverage/'}
            ]
        },

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
