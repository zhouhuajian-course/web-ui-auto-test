const { chromium, firefox, webkit } = require("playwright");

(async () => {
  const browser = await firefox.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto("http://localhost/signup")
  // 定位 <input name="username" placeholder="请输入账号" type="text" />
  const locator1 = page.getByPlaceholder("请输入账号")
  const locator2 = page.locator("input[name=\"username\"]")
  const locator3 = page.locator("//input[@name=\"username\"]")

  console.log(await locator1.getAttribute("name"));
  console.log(await locator2.getAttribute("placeholder"));
  console.log(await locator3.isVisible());

  // username 请输入账号 true

  // 定位 <button class="btn" type="submit" id="signup-btn" disabled>注册</button>
  const locator4 = page.getByText("注册", { exact: true })
  const locator5 = page.locator("#signup-btn")
  const locator6 = page.locator(".btn").first()
  const locator7 = page.getByRole("button", { name: "注册" })
  const locator8 = page.getByRole("button", { disabled: true })

  console.log(await locator4.getAttribute("class"));
  console.log(await locator5.getAttribute("id"));
  console.log(await locator6.isDisabled());
  console.log(await locator7.isEnabled());
  console.log(await locator8.innerText());

  // btn signup-btn true false 注册

  // 定位 <p>这是<strong>协议</strong>内容1</p>
  //      <p>这是<strong>协议</strong>内容2</p>
  const locator9 = page.locator("//div").nth(0).getByRole("paragraph")

  console.log(await locator9.count());
  for (const loc of await locator9.all()) {
    console.log(await loc.innerHTML());
  }

  // 2 这是<strong>协议</strong>内容1 这是<strong>协议</strong>内容2

  await browser.close()
})()