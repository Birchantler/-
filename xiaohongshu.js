const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({ storageState: `./login2.json` });
  const page = await context.newPage();


  // 在下面输入搜索关键词
  let keyword = '演唱会';

  await page.goto('https://xhs.huitun.com/app/#/note/note_search?searchValue=' + keyword + '&searchType=all');
  await page.waitForTimeout(5000);
  const count = await page.$$eval('div.e+ZQK2xVJvlsEhq2dm-MSg==', elements => elements.length);

  if (count > 6) {
    const spans = await page.$$('div.e+ZQK2xVJvlsEhq2dm-MSg==');
  for (let i = 0; i < 6; i++) {
    const span = spans[i];
    const content = await span.innerText();
    console.log(content);
  } 
  } else {
    console.log('看不到:(');
  }
  await browser.close();
})();