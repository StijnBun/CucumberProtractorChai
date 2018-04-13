var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
browser.waitForAngularEnabled(false);
chai.use(chaiAsPromised);
var expect = chai.expect;

module.exports = function(){

  this.Given(/^I go to "([^"]*)"$/, function(site) {
      browser.get(site);
    });

    this.Then(/^I see something$/, function(done) {
      var gottenelement = element(by.xpath('//*[@id="zen-preamble"]/h3'))
      expect(gottenelement.getText()).to.eventually.equal('THE ROAD TO ENLIGHTENMENT').and.notify(done);
    });

};
