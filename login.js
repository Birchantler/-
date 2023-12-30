const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://xhs.huitun.com/app/#/app/dashboard');
  // 在这里进行一些操作，例如导航到特定页面、登录等
  await page.waitForTimeout(30000);
  // 保存当前上下文的存储状态到文件
  await context.storageState({ path: './login2.json' });

  await browser.close();
})();