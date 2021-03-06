"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["no-sandbox"]
        }
    },
    specs: ['../features/*.feature'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: "https://localhost:8808/",
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: [],
        require: ['../steps/*.js', '../hooks/*.js'],
        tags: '@smoke'
    }
};
//# sourceMappingURL=config.js.map