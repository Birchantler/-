const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();


  // 在下面输入搜索关键词
  let keyword = '演唱会';

  await page.goto('https://dy.huitun.com/app/#/app/video/hot_aweme?keyword=' + keyword + '&hours=72');


  await page.waitForTimeout(3000);

  await page.click('button.ant-btn.ant-btn-primary');

  await page.waitForSelector('.antd-pro-components-mod-login-index-login_change');

  await page.$eval('.antd-pro-components-mod-login-index-login_change', (element) => {
    element.click();
  });


  await page.waitForTimeout(1000);

  await page.waitForSelector('input#normal_login_mobile');
  const inputElement1 = await page.$('input#normal_login_mobile');
  await inputElement1.fill('18300869473');

  await page.waitForSelector('input#normal_login_password');
  const inputElement2 = await page.$('input#normal_login_password');
  await inputElement2.fill('hsr200806');

  await page.waitForTimeout(1000);

  await page.waitForSelector('button.ant-btn.antd-pro-components-mod-login-index-submit_btn.ant-btn-primary.ant-btn-lg.ant-btn-block');
  await page.click('button.ant-btn.antd-pro-components-mod-login-index-submit_btn.ant-btn-primary.ant-btn-lg.ant-btn-block');

  await page.waitForTimeout(5000);

  const count = await page.$$eval('.antd-pro-pages-material-hot_aweme-index-one_line', elements => elements.length);
  if (count > 3) {
    const spans = await page.$$('.antd-pro-pages-material-hot_aweme-index-one_line');
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