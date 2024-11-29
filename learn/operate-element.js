const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 3000
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  // 访问 填写资料
  await page.goto('http://localhost/profile');
  await page.locator('input[name="name"]').fill('周华健');
  await page.locator('input[name="avatar"]').setInputFiles('learn/avatar.svg');
  await page.getByLabel('男').check();
  await page.locator('input[name="birthday"]').fill('2024-11-27');
  await page.locator('textarea[name="intro"]').fill('这是简介');
  await page.getByRole('combobox').selectOption('汉族');
  await page.getByLabel('普通话').check();
  await page.getByLabel('粤语').check();
  await page.getByLabel('英语').check();
  await page.getByRole('button', { name: '提交' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();