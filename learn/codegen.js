const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    // slow motion 慢动作 先做操作，再暂停5秒
    slowMo: 5000
  });
  // context1 page1 page2 page3 cookie1
  // context2 page4 page5 page6 cookie2
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost/login');
  await page.locator('input[name="username"]').fill('zhouhuajian');
  await page.locator('input[name="password"]').fill('zhouhuajian');
  await page.getByRole('button', { name: '登录' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();