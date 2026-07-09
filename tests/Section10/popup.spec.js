const { test, expect } = require('@playwright/test');

test('Browser navigation validation', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // await page.goto('https://www.google.com/');

    // await page.goBack();
    // await expect(page).toHaveURL(/AutomationPractice/);

    // await page.goForward();
    // await expect(page).toHaveURL(/google/);

    page.on('dialog', dialog => dialog.accept());

    await expect(page.locator("displayed-text")).toBeVisible();
    await page.locator("hide-textbox").click()
    await expect(page.locator("displayed-text")).toBeHidden();

    //Java Popup

    //page.on("close")


    await page.locator("confirm").click();
    await page.pause();
    //page.on('dialog', dialog => dialog.dismiss());

    await page.locator("mouserhover").hover();

});