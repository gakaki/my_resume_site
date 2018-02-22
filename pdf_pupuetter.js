const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage();
  const url  = 'http://127.0.0.1:3000'
  await page.setViewport({width: 1024, height: 768 , deviceScaleFactor : 1})
  // await page.setViewport({width: 800, height: 800, deviceScaleFactor: 1});

  await page.goto(url, {waitUntil: 'networkidle2'})

  await page.emulateMedia('print')
  await page.screenshot({path: './static/贺贤明的个人简历.png',fullPage: true})
  await page.pdf({path: './static/贺贤明的个人简历.pdf', format: 'A4', printBackground: true})
  await browser.close();
})();


// if print pdf style is not good https://github.com/GoogleChrome/puppeteer/issues/301