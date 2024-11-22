const { chromium, firefox, webkit } = require("playwright");

(async () => {
  // 启动浏览器 默认无头模式 headless 
  const browser = await firefox.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto("http://localhost/welcome")
  const title = await page.title()
  const content = await page.content()
  console.log(title);
  console.log(content);
  await browser.close()
})()