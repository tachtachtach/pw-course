import { test, expect } from '@playwright/test';
test('test 3', async ({ page }) => {
    // Access page
    await page.goto('https://material.playwrightvn.com/');
  
    // Click on “Bài học 3: Todo page” 
    await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
  
    // Add 100 tasks
    await test.step("Step 1", async () => {
      for (let i = 1; i <= 100; i++) {
        await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        await page.locator("//button[@id='add-task']").click();
      }
    });
    // Delete odd number 
    page.on('dialog', async dialog => dialog.accept());
    await test.step("Step 2", async () => {
      for (let i = 1; i <= 100; i++) {
        if (i % 2 !== 0) {
          await page.locator(`//button[@id='to-do-${i}-delete']`).click();
  
        }
      }
    })
  });