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

test('test 4', async ({ page }) => {
  // Access page
  await page.goto('https://material.playwrightvn.com/');

  // Click on “Bài học 4: Personal notes” 
  await page.locator("//a[contains(text(), 'Bài học 4: Personal notes')]").click();

  await test.step("Step 1", async () => {
    const notes = [
      { title: "Hệ thống cảnh báo sớm ngăn chặn thảm họa sóng thần", content: "Hệ thống cảnh báo sớm Thái Bình Dương cung cấp dữ liệu giúp nhà nghiên cứu đưa ra ước tính ban đầu về sóng thần trong vòng vài phút, giúp người dân sơ tán kịp thời." },
      { title: "Robot phục vụ người dân làm thủ tục hành chính", content: "Robot lễ tân trả lời thắc mắc của người dân, hướng dẫn quy trình, giúp rút ngắn nhiều thời gian làm thủ tục tại các trung tâm phục vụ hành chính công trên địa bàn Thủ đô." },
      { title: "Tia sét lập kỷ lục dài nhất thế giới", content: "Tổ chức Khí tượng Thế giới (WMO) xác nhận một tia sét kéo dài qua 5 bang của Mỹ." },
      { title: "Quốc gia đầu tiên phải di cư vì biến đổi khí hậu", content: "Nghiên cứu mới dự đoán Tuvalu có thể bị chìm trong 25 năm tới." },
      { title: "Những cánh đồng 'không người lái' tại Trung Quốc", content: "Dưới ánh nắng chói chang tại làng Trương Trang Lý, tỉnh Hà Nam (Trung Quốc)." },
      { title: "Apple bán được ba tỷ iPhone", content: "CEO Tim Cook cho biết Apple đã bán tổng cộng ba tỷ iPhone từ khi ra mắt sản phẩm năm 2007." },
      { title: "5 máy hút ẩm kiêm lọc khí cao cấp", content: "Số bình chọn thứ hai của 'Sản phẩm tôi yêu 2025'." },
      { title: "Chiến lược xây dựng kế hoạch IMC hiệu quả từ A đến Z", content: "Cách định hình kế hoạch chiến lược truyền thông, tải ngay bản mẫu kế hoạch marketing tặng kèm." },
      { title: "Ứng dụng chuyển đổi số trong quản lý cán bộ", content: "Bộ Khoa học và Công nghệ sẽ đổi mới phương thức quản lý cán bộ." },
      { title: "Lương cao chưa đủ để giữ chân nhân tài khoa học công nghệ", content: "Giám đốc Đại học Quốc gia TP HCM cho biết." },
    ];

    for (const note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("Step 2", async () => {
    let searchText = "Robot phục vụ";
    await page.locator("//input[@id='search']").fill(searchText);
    const resultSearch = await page.locator("//ul//div//strong").first().innerText();
    expect(resultSearch).toContain(searchText);
  });

});