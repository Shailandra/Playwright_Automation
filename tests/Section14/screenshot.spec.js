const { test, expect } = require('@playwright/test');

test('Browser navigation validation', async ({ page }) => {

    // await page.goto('https://www.google.com/');

    // await page.goBack();
    // await expect(page).toHaveURL(/AutomationPractice/);

    // await page.goForward();
    // await expect(page).toHaveURL(/google/);


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#displayed-text").screenshot({ path: 'partially.png' });
    await page.locator("#hide-textbox").click()
    await page.screenshot({ path: 'screenshot.png' })
    await expect(page.locator("#displayed-text")).toBeHidden();

});

test.only('Visual Testing', async ({ page }) => {

    await page.goto('https://www.flightware.com/');
    expect(await page.screenshot()).toMatchSnapshot('landing.png')
})