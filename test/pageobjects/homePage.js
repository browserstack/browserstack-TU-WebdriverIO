const Page = require('./page');
require('./signInPage');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get signInLink() {
    return $('#signin')
  }

  navigateToSignIn() {
    this.signInLink.click();
  }

  open() {
    return super.open('');
  }
}

module.exports = new HomePage();
