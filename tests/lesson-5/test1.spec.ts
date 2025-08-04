import { test, expect } from '@playwright/test';

test('test 1', async ({ page }) => {
  // Access page
  await page.goto('https://material.playwrightvn.com/');
  // Click on “Bài học 1: Register Page” 
  await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();

  // Input username
  await test.step("Step 1", async () => {
    await page.locator("//input[@id='username']").fill('Nguyen Thu Trang');
  });

  // Input email
  await test.step("Step 2", async () => {
    await page.locator("//input[@id='email']").fill('thutrang123888@gmail.com');
  });

  // Choose gender
  await test.step("Step 3", async () => {
    await page.locator("//input[@id='female']").check();
  });

  // Choose hobbies
  await test.step("Step 4", async () => {
    await page.locator("//input[@id='traveling']").setChecked(true);
    await page.locator("//input[@id='cooking']").setChecked(true);
  });

  // Choose country
  await test.step("Step 5", async () => {
    await page.locator("//select[@id='country']").selectOption("Canada");
  });

  // Choose File
  await test.step("Step 6", async () => {
    await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-5/test-data/Test_image-1.jpg");
  });

  //Chooose Biography
  await test.step("Step 1", async () => {

    await page.locator("//textarea[@id='bio']").fill("To test");
  });

  //Scroll to Register button and click  
  await test.step("Step 1", async () => {
    const element = await page.locator("//button[@type='submit']");
    await element.scrollIntoViewIfNeeded(); // Scroll đến phần tử

    // Click on register button
    await element.click();
  });
});