const { test } = require('@playwright/test');

test('First Playwright Test', async ({ browser }) => {

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    // Navigate to the application
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    // Enter credentials
    await page.locator('#username').fill('rahulshettyacadem') //fill('rahulshettyacademy')
    await page.locator('[type ="password"]').fill('Learning') //fill('Learning@830$3mK2')
    await page.locator('#signInBtn').click()
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrec&YH')

    await password.fill("") //.fill('Learning@830$3mK2')
    await password.fill('Learning@830$3mK')
    await signInButton.click()


    //strict Mode Violation

    //******************************************************************************************** */
    //Page rediraction
    //console.log(await page.locator(".card-body a").first().textContent());
    console.log(await page.locator(".card-body a").nth(0).textContent());  //nth(1)
    console.log(await page.locator(".card-body a").nth(1).textContent()); 

});