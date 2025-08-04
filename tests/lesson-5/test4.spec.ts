import { test, expect } from '@playwright/test';
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