const puppeteer = require('puppeteer');
/*
https://segmentfault.com/a/1190000011382062

#依赖库
yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y

#字体
yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y

*/


(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
  const page = await browser.newPage();
  const url  = 'http://127.0.0.1:3000'
  await page.setViewport({width: 1024, height: 768 , deviceScaleFactor : 1})
  // await page.setViewport({width: 800, height: 800, deviceScaleFactor: 1});

  await page.goto(url, {waitUntil: 'networkidle2'})

  await page.emulateMedia('print')
  await page.screenshot({path: './dist/贺贤明的个人简历.png',fullPage: true})
  await page.pdf({path: './dist/贺贤明的个人简历.pdf', format: 'A4', printBackground: true})
  await browser.close();
})();


// if print pdf style is not good https://github.com/GoogleChrome/puppeteer/issues/301