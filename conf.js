exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts:{
    require:['*.steps.js']
  },
};
