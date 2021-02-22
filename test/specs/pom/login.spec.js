const HomePage = require('../../pageobjects/homePage');
const SignInPage = require('../../pageobjects/signInPage');

describe('StackDemo login', () => {

  beforeEach('Open StackDemo', () => {
    HomePage.open();
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })

  it('valid account should see username', () => {
    HomePage.navigateToSignIn();
    SignInPage.login('fav_user\n', 'testingisfun99\n');

    expect(SignInPage.getSignedInUsername()).toHaveText('fav_user');
  })
})
