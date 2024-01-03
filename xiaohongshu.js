const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();


  // 在下面输入搜索关键词
  let keyword = '唱歌';

  await page.goto('https://xhs.huitun.com/app/#/note/note_search?searchValue=' + keyword + '&searchType=all');
  await page.waitForTimeout(3000);

  await page.click('button.ant-btn.ant-btn-primary');

  await page.waitForSelector('div._7YJHi6NPg6985o\\+c\\+hsdHg\\=\\=');

  await page.$eval('div._7YJHi6NPg6985o\\+c\\+hsdHg\\=\\= span[role="img"]', (element) => {
    element.click();
  });


  await page.waitForTimeout(1000);

  await page.waitForSelector('input.ant-input-lg[placeholder="请输入手机号"]');
  const inputElement = await page.$('input.ant-input-lg[placeholder="请输入手机号"]');
  await inputElement.fill('18300869473');

  await page.waitForSelector('input.ant-input-lg[type="password"][placeholder="6-15位数字与字母组合"]');
  const passwordInputElement = await page.$('input.ant-input-lg[type="password"][placeholder="6-15位数字与字母组合"]');
  await passwordInputElement.fill('hsr200806');
 
  await page.waitForTimeout(1000);
  const buttonElements = await page.$$('button.ant-btn.ant-btn-primary.ant-btn-lg');
  await buttonElements[1].click();

  await page.waitForTimeout(1000);



  const count = await page.$$eval('div.e\\+ZQK2xVJvlsEhq2dm-MSg\\=\\=', elements => elements.length);

  if (count > 6) {
    const spans = await page.$$('div.e\\+ZQK2xVJvlsEhq2dm-MSg\\=\\=');
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