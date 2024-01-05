const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();


  let keyword = process.argv[2];

  await page.goto('https://xhs.huitun.com/app/#/note/note_search');
  await page.waitForTimeout(1000);

  await page.click('li.login');

  await page.waitForSelector('div.right_btn.account_bg');

  await page.$eval('div.right_btn.account_bg', (element) => {
    element.click();
  });


  await page.waitForTimeout(1000);

  await page.waitForSelector('input#phone');
  const inputElement = await page.$('input#phone');
  await inputElement.fill('18617049299');

  await page.waitForSelector('input#password');
  const passwordInputElement = await page.$('input#password');
  await passwordInputElement.fill('hsr200806');
 
  await page.waitForTimeout(1000);

  await page.waitForSelector('input.submit_btn[type="submit"][value="登录"]');
  await page.click('input.submit_btn[type="submit"][value="登录"]');

  await page.click('div.ant-modal[style="width: 320px;"]>div>button');
  await page.click('div.ant-modal[style="width: 520px;"]>div>button');


  await page.waitForTimeout(1000);
 
  await page.waitForSelector('li.ant-menu-submenu.ant-menu-submenu-inline');
  const element = await page.$$('li.ant-menu-submenu.ant-menu-submenu-inline');
  await element[3].click();

  await page.waitForTimeout(1000);

  await page.waitForSelector('a[href="#/note/note_search"]');
  const element1 = await page.$('a[href="#/note/note_search"]');
  await element1.click();



  const inputElement1 = await page.$('input.ant-input.ant-input-lg');
  await inputElement1.fill(keyword);

  await page.click('button.ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button');
  await page.waitForTimeout(3000);






  const count = await page.$$eval('div.e\\+ZQK2xVJvlsEhq2dm-MSg\\=\\=', elements => elements.length);

  if (count > 3) {
    const element = await page.$$('div.e\\+ZQK2xVJvlsEhq2dm-MSg\\=\\=');
    await element[0].click();

    await page.waitForTimeout(5000);

    const title2 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date2 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration2 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords2 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText));
    const author2 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans2 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);

    console.log(fans1)

    const newPagePromise2 = page.waitForEvent('popup');
    await page.click('div._1If650bSJqk33UP3VIRjrA\\=\\=');
    const newPage2 = await newPagePromise2;
    
    let url2 = newPage2.url();

    await newPage1.close();

    await page.click('button.ant-modal-close');
    await page.waitForTimeout(5000);

    const title3 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date3 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration3 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords3 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText));
    const author3 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans3 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);

    console.log(fans1)

    const newPagePromise3 = page.waitForEvent('popup');
    await page.click('div._1If650bSJqk33UP3VIRjrA\\=\\=');
    const newPage3 = await newPagePromise3;
    
    let url3 = newPage3.url();

    await newPage1.close();

    await page.click('button.ant-modal-close');
    await page.waitForTimeout(5000);

    const title1 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date1 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration1 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords1 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText));
    const author1 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans1 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);

    console.log(fans1)

    const newPagePromise1 = page.waitForEvent('popup');
    await page.click('div._1If650bSJqk33UP3VIRjrA\\=\\=');
    const newPage1 = await newPagePromise1;
    
    let url1 = newPage1.url();

    await newPage1.close();

    await page.click('button.ant-modal-close');

    await page.waitForTimeout(3000);
    


    const data = {
      url1:url1,
      title1:title1,
      date1:date1,
      duration1:duration1,
      hotWords1:hotWords1,
      author1:author1,
      fans1:fans1,
      url2:url2,
      title2:title2,
      date2:date2,
      duration2:duration2,
      hotWords2:hotWords2,
      author2:author2,
      fans2:fans2,
      url3:url3,
      title3:title3,
      date3:date3,
      duration3:duration3,
      hotWords3:hotWords3,
      author3:author3,
      fans3:fans3,
    }
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', jsonData, 'utf8', err => {
      if (err) {
        console.error('Error writing JSON file:', err);
        return;
      }
      console.log('Data saved to data.json file');
    });
    }else{
      console.log('看不到:(')
    }
    await browser.close();
})();