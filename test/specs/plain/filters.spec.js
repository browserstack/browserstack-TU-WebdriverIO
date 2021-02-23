describe('StackDemo filters', () => {

  beforeEach('Open StackDemo', () => {
    browser.url('');
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })

  it('Lowest to Highest filter is applied', () => {
    $('.sort select').selectByAttribute('value', 'lowestprice');
    browser.waitUntil(
      () => $("//*[@class = 'shelf-item__title'][1]").getText() === 'Pixel 2',
      {
          timeout: 5000,
          timeoutMsg: 'expected filtering to happen within 5s'
      }
    );
    all_prices = $$(".val > b").map(function(element){
      return parseInt(element.getAttribute('innerText'))
    });
    // expect(all_prices)(all_prices.sort(function(a, b){return a - b}));
  })

  it('Apply vendor filter', () => {
    $("//span[contains(text(), 'Apple')]").click();
    $("//span[contains(text(), 'Samsung')]").click();
    browser.pause(5000)                                               // Example for static wait
    all_phones = $$(".shelf-item__title").map(function(element){
      return element.getText()
    });
    console.log(all_phones)
  })
})
