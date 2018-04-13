var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
browser.waitForAngularEnabled(false);
chai.use(chaiAsPromised);

// Then either:
var expect = chai.expect;

// spec.js
describe('Protractor Demo App', function() {
  it('should add one and two', function(done) {
    browser.get('http://www.csszengarden.com/');
    var gottenelement = element(by.xpath('//*[@id="zen-preamble"]/h3'))
    expect(gottenelement.getText()).to.eventually.equal('The Road to Enlightenment').and.notify(done);
    //     toEqual('3'); // This is wrong!
    //     done();

  });
});
