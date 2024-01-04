const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();


  // 在下面输入搜索关键词
  let keyword = '唱歌';
  //输入24小时，近三天，近7天，近30天，近90天，近180天
  let time = '24小时'

  await page.goto('https://xhs.huitun.com/app/#/note/note_search?searchValue=' + keyword + '&searchType=all');
  await page.waitForTimeout(1000);

  await page.click('li.login');

  await page.waitForSelector('div.right_btn.account_bg');

  await page.$eval('div.right_btn.account_bg', (element) => {
    element.click();
  });


  await page.waitForTimeout(1000);

  await page.waitForSelector('input#phone');
  const inputElement = await page.$('input#phone');
  await inputElement.fill('18300869473');

  await page.waitForSelector('input#password');
  const passwordInputElement = await page.$('input#password');
  await passwordInputElement.fill('hsr200806');
 
  await page.waitForTimeout(1000);

  await page.waitForSelector('input.submit_btn[type="submit"][value="登录"]');
  await page.click('input.submit_btn[type="submit"][value="登录"]');

  await page.waitForTimeout(1000);

  await page.waitForSelector('a.link_a');
  await page.click('a.link_a');

  await page.waitForTimeout(1000);
  await page.click('span.ant-modal-close-x');
 

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