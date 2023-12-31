const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();


  let keyword = process.argv[2];

  const maxRepeats = 5;
  const elementSelector = 'div.body-wrap#bodyWrap';
  let repeatCount = 0;

  while (repeatCount <= maxRepeats) {
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
  await inputElement.fill('18300869473');

  await page.waitForSelector('input#password');
  const passwordInputElement = await page.$('input#password');
  await passwordInputElement.fill('hsr200806');
 
  await page.waitForTimeout(1000);

  await page.waitForSelector('input.submit_btn[type="submit"][value="登录"]');
  await page.click('input.submit_btn[type="submit"][value="登录"]');

    const elements = await page.$$(elementSelector);

    if (elements.length > 1) {
      repeatCount++;
      console.log(`元素 ${elementSelector} 重复出现次数: ${repeatCount}`);
      await page.waitForTimeout(1000); 
    } else {
      break;
    }
  }

  if (repeatCount > maxRepeats) {
    throw new Error(`元素 ${elementSelector} 重复出现超过 ${maxRepeats} 次`);
  }

  await page.click('div.ant-modal[style="width: 320px;"]>div>button');
  await page.click('div.ant-modal[style="width: 520px;"]>div>button');


  await page.waitForTimeout(1000);
 
  await page.waitForSelector('li.ant-menu-submenu.ant-menu-submenu-inline');
  const element1 = await page.$$('li.ant-menu-submenu.ant-menu-submenu-inline');
  await element1[3].click();

  await page.waitForTimeout(1000);

  await page.waitForSelector('a[href="#/note/note_search"]');
  const element2 = await page.$('a[href="#/note/note_search"]');
  await element2.click();



  const inputElement1 = await page.$('input.ant-input.ant-input-lg');
  await inputElement1.fill(keyword);

  await page.click('button.ant-btn.ant-btn-primary.ant-btn-lg.ant-input-search-button');
  await page.waitForTimeout(3000);






  const count = await page.$$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', elements => elements.length);

  if (count > 3) {

    const element = await page.$$('div.e\\+ZQK2xVJvlsEhq2dm-MSg\\=\\=');
    await element[0].click();
    await page.waitForTimeout(5000);

    const title1 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date1 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration1 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords1 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText)).join(' ');
    const author1 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans1 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);


    const newPagePromise1 = page.waitForEvent('popup');
    await page.click('div.I4j2n6lItFu6zj051HhhVw\\=\\=');
    const newPage1 = await newPagePromise1;
    
    let url2 = newPage1.url();

    await newPage1.close();

    await page.click('button.ant-modal-close');
    await page.waitForTimeout(5000);
    await element[1].click();

    const title2 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date2 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration2 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords2 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText)).join(' ');
    const author2 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans2 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);

    const newPagePromise2 = page.waitForEvent('popup');
    await page.click('div.I4j2n6lItFu6zj051HhhVw\\=\\=');
    const newPage2 = await newPagePromise2;
    
    let url3 = newPage2.url();

    await newPage2.close();

    await page.click('button.ant-modal-close');
    await page.waitForTimeout(5000);
    await element[3].click();

    const title3 = await page.$eval('div.I4j2n6lItFu6zj051HhhVw\\=\\=', element => element.textContent);
    const date3 = await page.$$eval('div.DBQLrrmgLUBhgVmB5Y6xlQ\\=\\=', element => element.textContent);
    const duration3 = await page.$$eval('div._1If650bSJqk33UP3VIRjrA\\=\\=', element => element.textContent);
    const hotWords3 = await page.$$eval('div.XFC7k3xP2MSpG6psPu13Ag\\=\\=', elements => Array.from(elements, element => element.innerText)).join(' ');
    const author3 = await page.$eval('div.LjyKhlcpxkszuYaUsm59Xw\\=\\=',element => element.textContent)
    const fans3 = await page.$eval('div.UE8modKA5\\+VXIzU4sSe4VA\\=\\=',element => element.textContent);


    const newPagePromise3 = page.waitForEvent('popup');
    await page.click('div.I4j2n6lItFu6zj051HhhVw\\=\\=');
    const newPage3 = await newPagePromise3;
    
    let url1 = newPage3.url();

    await newPage3.close();

    await page.click('button.ant-modal-close');

    await page.waitForTimeout(3000);
    


    const data = [
      {
        url: url1,
        title: title1,
        date: date1,
        duration: duration1,
        renew: renew1,
        classification: classification1,
        hotWords: hotWords1,
        author: author1,
        fans: fans1
      },
      {
        url: url2,
        title: title2,
        date: date2,
        duration: duration2,
        renew: renew2,
        classification: classification2,
        hotWords: hotWords2,
        author: author2,
        fans: fans2
      },
      {
        url: url3,
        title: title3,
        date: date3,
        duration: duration3,
        renew: renew3,
        classification: classification3,
        hotWords: hotWords3,
        author: author3,
        fans: fans3
      }
    ];
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