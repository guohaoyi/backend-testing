// Karma configuration
// Generated on Tue Mar 07 2017 11:04:18 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [	
	'lib/jquery.js',
	'lib/solution.js',
	'lib/angular.js',
	'lib/angular-route.js',
	'lib/angular-mocks.js',
	    'index.js',	    
	'Directives/actionBox.html',
	'Directives/assignmentList.html',
	'Directives/gradeDirective.html',
	'Directives/groupAssignment.html',
	'Directives/homeGroupAssign.html',
	 'test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
	'Directives/homeGroupAssign.html':"ng-html2js",
	'Directives/groupAssignment.html':"ng-html2js",
	'Directives/gradeDirective.html':"ng-html2js",
	'Directives/actionBox.html':"ng-html2js",
	'Directives/assignmentList.html':"ng-html2js"
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
