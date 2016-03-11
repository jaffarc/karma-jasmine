module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine'],
        
        files: [
            'src/file.js',
            'test/*.js'
        ],
      
        
        browsers: ['PhantomJS'],
        autoWatch : false,
        singleRun: true,
        plugins:[
          'karma-jasmine',
          'karma-coverage',
          'karma-phantomjs-launcher'
        ],
        reporters: [
            'coverage',
        ],
        
        preprocessors: { 
            'src/*.js': ['coverage']
        },

        coverageReporter: {
            type : 'html',
            dir: "./coverage",
            reporters: [
                { type: 'text-summary' },
                { type: "html", subdir: "/" }
            ]
        },
        thresholdReporter: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
        }
    });
};
