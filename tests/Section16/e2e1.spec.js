const { test, expect } = require("@playwright/test");
const { POManager } = require("../../pageObject/POManager");

//Need to watch video 89 Again for 
// Load test data
//const dataSet = require("../../utils/placeorderTestData.json");
const dataSet = JSON.parse(JSON.stringify(require('../../utils/placeorderTestData.json')));

for (const data of dataSet) {
  test(`End to End Automation test for ${data.productName}`, async ({ page }) => {

    const poManager = new POManager(page);

    const loginPage = poManager.getLoginPage();
    await loginPage.goto();

    // Make sure these property names match your JSON file
    await loginPage.validLogin(data.userName, data.password);

    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(data.productName);
    await dashboardPage.navigateToCart();

    await expect(
      page.locator(`h3:has-text("${data.productName}")`)
    ).toBeVisible();

    await page.locator("text=Checkout").click();

    await page
      .locator("input[placeholder='Select Country']")
      .pressSequentially("ind");

    const dropdown = page.locator(".ta-results");
    await dropdown.waitFor();

    const options = dropdown.locator("button");
    const optionCount = await options.count();

    for (let i = 0; i < optionCount; i++) {
      const text = await options.nth(i).textContent();

      if (text.trim() === "India") {
        await options.nth(i).click();
        break;
      }
    }

    await expect(page.locator("label[type='text']").first())
      .toHaveText(data.userName);

    await page.locator("a:has-text('PLACE ORDER')").click();

    // await page.pause();
  });
}

