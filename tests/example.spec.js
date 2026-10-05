import { test, expect } from '@playwright/test';
import neeta from '../test-data.json' with {"type":"json"}


for (let i = 0; i < neeta.length ; i++){
  let dataJson = neeta[i];
  test(`${dataJson.testname}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(dataJson.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(dataJson.password);
    await page.locator('[data-test="password"]').press('Enter');
    let errorMsg = await page.locator('[data-test="error"]').textContent();
    await expect(errorMsg).toBe(dataJson.errorMsg)
  });
}