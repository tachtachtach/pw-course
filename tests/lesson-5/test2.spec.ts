import { test, expect } from '@playwright/test';

test('test 2', async ({ page }) => {
    // Access page
    await page.goto('https://material.playwrightvn.com/');
    // Click on “Bài học 2: Product page”
    await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
  
    //a. Choose product 1: 2
    await test.step("Step 1", async () => {
      await page.locator("//button[@data-product-id='1']").dblclick();
    });
  
    //b. Choose Product 2: 3
    await test.step("Step 2", async () => {
      await page.locator("//button[@data-product-id='2']").click({
        clickCount: 3
      });
    });
  
    //c. Choose Product 3: 1
    await test.step("Step 3", async () => {
      await page.locator("//button[@data-product-id='3']").click();
    });
  });