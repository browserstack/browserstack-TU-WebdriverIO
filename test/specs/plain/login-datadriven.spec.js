let cases = [
  { 'username': 'locked_user', 'password': 'testingisfun99', 'error': 'Your account has been locked.' },
  { 'username': 'fav_user', 'password': 'wrongpass', 'error': 'Invalid Password' },
  { 'username': 'helloworld', 'password': 'testingisfun99', 'error': 'Invalid Username' }
]

describe('StackDemo login', () => {

  beforeEach('Open StackDemo', () => {
    browser.url('');
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })
  cases.forEach(({username, password, error }) => {
    it(`should return '${ error }' for account with username '${ username }'`, function() {
      $('#signin').click();
      $('#username input').setValue(username + '\n');
      $('#password input').setValue(password + '\n');
      $('#login-btn').click();

      expect($('.api-error')).toHaveText(error);
    })
  });
})
