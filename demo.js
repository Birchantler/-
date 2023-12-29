const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext({ storageState: `./login.json` });
  const page = await context.newPage();


  // 在下面输入搜索关键词
  let keyword = '演唱会';

  await page.goto('https://dy.huitun.com/app/#/app/video/hot_aweme?keyword=' + keyword + '&hours=72');
  const count = await page.$$eval('.antd-pro-pages-material-hot_aweme-index-one_line', elements => elements.length);

  if (count > 3) {
    const spans = await page.$$('.antd-pro-pages-material-hot_aweme-index-one_line');
  for (let i = 0; i < 3; i++) {
    const span = spans[i];
    const content = await span.innerText();
    console.log(content);
    await browser.close();
  } 
  } else {
    console.log('看不到:(');
    await browser.close();
  }
  await browser.close();
})();