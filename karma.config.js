module.exports = function (config) {
    config.set({
        preprocessors: {
            '**/*.scss': ['scss']
        },
        basePath: 'src',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
            clearContext: false // keep Jasmine Spec Runner output visible
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage'),
            subdir: '.',
            reporters: [
                {type: 'html'},
                {type: 'text-summary'}
            ]
        },
        reporters: ['progress', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'], // Use ChromeHeadless for CI/CD environments
        singleRun: false,
        restartOnFileChange: true
    });
};
