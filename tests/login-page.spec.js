// @ts-check
const { test, expect } = require('@playwright/test');

test('测试页面基础', async ({ page }) => {
  await page.goto('http://localhost/login');
  await expect(page).toHaveTitle("用户登录");
});

test('测试登录成功', async ({ page }) => {
  await page.goto('http://localhost/login');
  await page.locator('input[name="username"]').fill('zhouhuajian');
  await page.locator('input[name="password"]').fill('zhouhuajian');
  await page.getByRole('button', { name: '登录' }).click();
  await expect(page.getByText('zhouhuajian, 欢迎回来！')).toBeVisible();
});
