describe('StackDemo filters', () => {

  beforeEach('Open StackDemo', () => {
    browser.url('');
  })

  afterEach('clear sessionstorage', () => {
    browser.execute(() => sessionStorage.clear())
  })

  it('Lowest to Highest filter is applied', () => {
    $('.sort select').selectByAttribute('value', 'lowestprice');
    all_prices = $$(".val > b").map(function(element){
      return parseInt(element.getAttribute('innerText'))
    });
    // expect(all_prices)(all_prices.sort(function(a, b){return a - b}));
  })

  it('Apply vendor filter', () => {
    $("//span[contains(text(), 'Apple')]").click();
    $("//span[contains(text(), 'Samsung')]").click();
    all_phones = $$(".shelf-item__title").map(function(element){
      return element.getAttribute('innerText')
    });
    console.log(all_phones)
  })
})
