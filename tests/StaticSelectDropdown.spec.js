const { test } = require('@playwright/test');

test.only('Test static select dropdown', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.waitForLoadState('networkidle')

    const userName = page.locator('#username');
    const password = page.locator('[type="password"]');
    const radio = page.locator('.radiotextsty');
    const dropdown = page.locator('select.form-control');

    // Select by value
    await dropdown.selectOption('consult');
    await page.waitForTimeout(3000);

    // Select by visible text (label)
    await dropdown.selectOption('Teacher');
    await page.waitForTimeout(3000);

    // Check the first radio button
    await radio.nth(0).check();

    await page.pause();
});