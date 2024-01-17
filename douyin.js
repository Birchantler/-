//在文件名后输入关键词和时间
//时间为2，6，12，24，72，168，360，720，1440，2160

const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 50 });
  const context = await browser.newContext();
  const page = await context.newPage();
  let keyword = process.argv[2];
  let time = process.argv[3];
  const maxRepeats = 5;
  const elementSelector = 'div.body-wrap#bodyWrap';
  let repeatCount = 0;

  while (repeatCount <= maxRepeats) {

    await page.goto('https://dy.huitun.com/app/#/app/video/hot_aweme?keyword=' + keyword + '&hours=' + time);


  await page.waitForTimeout(3000);

  await page.click('button.ant-btn.ant-btn-primary');

  await page.waitForSelector('.antd-pro-components-mod-login-index-login_change');

  await page.$eval('.antd-pro-components-mod-login-index-login_change', (element) => {
    element.click();
  });


  await page.waitForTimeout(1000);

  await page.waitForSelector('input#normal_login_mobile');
  const inputElement1 = await page.$('input#normal_login_mobile');
  await inputElement1.fill('18617049299');

  await page.waitForSelector('input#normal_login_password');
  const inputElement2 = await page.$('input#normal_login_password');
  await inputElement2.fill('hsr200806');

  await page.waitForTimeout(3000);

  await page.waitForSelector('button.ant-btn.antd-pro-components-mod-login-index-submit_btn.ant-btn-primary.ant-btn-lg.ant-btn-block');
  await page.click('button.ant-btn.antd-pro-components-mod-login-index-submit_btn.ant-btn-primary.ant-btn-lg.ant-btn-block');

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
  
  await page.waitForSelector('div.antd-pro-layouts-basic-layout-cancel_btn');
  await page.click('div.antd-pro-layouts-basic-layout-cancel_btn')
  await page.waitForTimeout(5000);

  const count = await page.$$eval('span.antd-pro-pages-material-hot_aweme-index-one_line', elements => elements.length);

  if(count>6){
    const newPagePromise1 = page.waitForEvent('popup');
    const element = await page.$$('span.antd-pro-pages-material-hot_aweme-index-one_line');
    await element[0].click();
    const newPage1 = await newPagePromise1;

    await page.waitForTimeout(5000);

    const title1 = await newPage1.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element.textContent);
    const date1 = await newPage1.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[1].textContent);
    const duration1 = await newPage1.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[2].textContent);
    const renew1 = await newPage1.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[3].textContent);
    const classification1 = await newPage1.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[4].textContent);
    const hotWordsElement1 = await newPage1.$('.antd-pro-pages-video-video_detail-components-video-title-index-spread_hot');
    const hotWords1 = (await hotWordsElement1.innerText()).trim().split('\n').map(text => text.trim() + ' ').join('');
    const author1 = await newPage1.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line.antd-pro-pages-video-video_detail-components-video-title-index-link_skip',element => element.textContent)
    const fans1 = await newPage1.$eval('span.antd-pro-pages-video-video_detail-components-video-title-index-bold_12',element => element.textContent);

    const newPagePromise4 = newPage1.waitForEvent('popup');
    await newPage1.click('div.antd-pro-pages-video-video_detail-components-video-title-index-double_avatar');
  
    const newPage4 = await newPagePromise4;
    
    let url1 = newPage4.url();

    await newPage4.close();
    await newPage1.close();

    await page.waitForTimeout(3000);
    


    const newPagePromise2 = page.waitForEvent('popup');
    await element[2].click();
    const newPage2 = await newPagePromise2;

    await page.waitForTimeout(5000);

    const title2 = await newPage2.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element.textContent);
    const date2 = await newPage2.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[1].textContent);
    const duration2 = await newPage2.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[2].textContent);
    const renew2 = await newPage2.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[3].textContent);
    const classification2 = await newPage2.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[4].textContent);
    const hotWordsElement2 = await newPage2.$('.antd-pro-pages-video-video_detail-components-video-title-index-spread_hot');
    const hotWords2 = (await hotWordsElement2.innerText()).trim().split('\n').map(text => text.trim() + ' ').join('');
    const author2 = await newPage2.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line.antd-pro-pages-video-video_detail-components-video-title-index-link_skip',element => element.textContent)
    const fans2 = await newPage2.$eval('span.antd-pro-pages-video-video_detail-components-video-title-index-bold_12',element => element.textContent)

    const newPagePromise5 = newPage2.waitForEvent('popup');
    await newPage2.click('div.antd-pro-pages-video-video_detail-components-video-title-index-double_avatar');
  
    const newPage5 = await newPagePromise5;
    
    let url2 = newPage5.url();

    await newPage5.close();
    await newPage2.close();
    await page.waitForTimeout(3000);

    const newPagePromise3 = page.waitForEvent('popup');
    await element[4].click();
    const newPage3 = await newPagePromise3;

    await page.waitForTimeout(5000);

    const title3 = await newPage3.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element.textContent);
    const date3 = await newPage3.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[1].textContent);
    const duration3 = await newPage3.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[2].textContent);
    const renew3 = await newPage3.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[3].textContent);
    const classification3 = await newPage3.$$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-one_line', element => element[4].textContent);
    const hotWordsElement3 = await newPage3.$('.antd-pro-pages-video-video_detail-components-video-title-index-spread_hot');
    const hotWords3 = (await hotWordsElement3.innerText()).trim().split('\n').map(text => text.trim() + ' ').join('');
    const author3 = await newPage3.$eval('div.antd-pro-pages-video-video_detail-components-video-title-index-bold_16.antd-pro-pages-video-video_detail-components-video-title-index-one_line.antd-pro-pages-video-video_detail-components-video-title-index-link_skip',element => element.textContent)
    const fans3 = await newPage3.$eval('span.antd-pro-pages-video-video_detail-components-video-title-index-bold_12',element => element.textContent)

    const newPagePromise6 = newPage3.waitForEvent('popup');
    await newPage3.click('div.antd-pro-pages-video-video_detail-components-video-title-index-double_avatar');
  
    const newPage6 = await newPagePromise6;
    
    let url3 = newPage6.url();
    await newPage6.close();
    await newPage3.close();
 

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