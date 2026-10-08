# Beinbe Ginseng Slim – Brand Profile Page

Trang hồ sơ thương hiệu (Profile Page / Single Page Profile Landing Page) cho **Beinbe Ginseng Slim** (`beinbe.ritual`), được xây dựng trên nền tảng **Astro 5** kết hợp adapter **Cloudflare Workers**.

---

## 🌟 Tổng Quan Giao Diện & Layout

Trang được thiết kế dạng Single Page Profile hiện đại, tối ưu trải nghiệm người dùng và chuẩn nhận diện thương hiệu với bảng màu:
- **Primary:** `#1b5e20` (Xanh đậm thiên nhiên)
- **Secondary:** `#4caf50` (Xanh lá sức sống)
- **Accent:** `#ff9800` (Cam năng lượng)
- **Background:** `#f8faf8` (Nền sáng hữu cơ dịu mắt)

### Các Section chính (từ trên xuống dưới):

1. **Section 1 – Header / Hero (`ProfileHeader.astro`)**:
   - Ảnh bìa thương hiệu tỉ lệ 1200x600 (nhúng trực tiếp từ Google Drive).
   - Logo / Avatar 500x500 bo tròn, viền trắng nổi bật kèm huy hiệu verified chính thức.
   - Title ngắn: **Beinbe** | Title dài: **Beinbe Ginseng Slim** | Username: `@beinbe.ritual`.
   - Mô tả ngắn gọn về công dụng sản phẩm: *"01 gói mỗi ngày hỗ trợ quản lý vóc dáng, chống oxy hóa và tăng cường trí nhớ. Thành phần thiên nhiên minh bạch, kiểm nghiệm bởi Viện Pasteur."*
   - Nút CTA chính: **"Truy cập website"** trỏ về [https://beinbe.com/](https://beinbe.com/) và nút **"Liên hệ"**.

2. **Section 2 – Giới Thiệu (`AboutSection.astro`)**:
   - Câu chuyện thương hiệu và sứ mệnh chi tiết (`description.long`).
   - Bio HTML chính thức: `<a href="https://beinbe.com/">Beinbe Ginseng Slim</a>`.
   - Lưới thẻ điểm nhấn: Kiểm nghiệm Viện Pasteur, Thành phần thiên nhiên minh bạch, Thói quen 01 gói mỗi ngày, và Thông tin đối tượng/kỷ niệm.

3. **Section 3 – Thông Tin Liên Hệ (`ContactBlock.astro`)**:
   - Hotline: `0962975381` (hỗ trợ bấm gọi trực tiếp).
   - Email: `xinchao@beinbe.com` (hỗ trợ bấm gửi mail).
   - Trụ sở: `Tầng 15, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, TP. Hồ Chí Minh`.
   - Thẻ Google Maps placeholder tương tác với hiệu ứng sóng radar và nút mở vị trí trên Google Maps.

4. **Section 4 – Kênh Truyền Thông & Mạng Xã Hội (`SocialGrid.astro` & `SocialCard.astro`)**:
   - Hiển thị dạng lưới thẻ Card 9 nền tảng (bao gồm 5 kênh mới):
     1. **Website Chính Thức**: [https://beinbe.com/](https://beinbe.com/)
     2. **Business Site** *(MỚI)*: [https://beinbe.com/business-info](https://beinbe.com/business-info)
     3. **Facebook Fanpage**: [https://www.facebook.com/beinbe.ritual](https://www.facebook.com/beinbe.ritual)
     4. **Instagram**: [https://www.instagram.com/beinbe.ritual](https://www.instagram.com/beinbe.ritual)
     5. **Twitter (X)** *(MỚI)*: [https://x.com/BeinbeGins2pu3](https://x.com/BeinbeGins2pu3)
     6. **TikTok**: [https://www.tiktok.com/@beinbe](https://www.tiktok.com/@beinbe)
     7. **YouTube Official** *(MỚI)*: [https://www.youtube.com/@BeinbeGinsengSlim](https://www.youtube.com/@BeinbeGinsengSlim)
     8. **Pinterest** *(MỚI)*: [https://www.pinterest.com/beinberitual/](https://www.pinterest.com/beinberitual/)
     9. **LinkedIn** *(MỚI)*: [https://www.linkedin.com/in/beinbe-ginseng-slim/](https://www.linkedin.com/in/beinbe-ginseng-slim/)
   - Icon SVG vector chuẩn từng nền tảng, hiệu ứng hover phóng to nhẹ và đổi viền sang màu thương hiệu, nhãn huy hiệu **MỚI** nổi bật.

5. **Section 5 – Hashtags / Tags (`HashtagList.astro`)**:
   - Hiển thị danh sách hashtag dạng chip/badge: `#beinbe`, `#ginsengslim`, `#beinbeginsengslim`, `#dailyslimritual`, `#deptubentrong`.
   - Tích hợp tính năng sao chép (Copy) trực quan: click vào từng tag để sao chép riêng lẻ, hoặc bấm nút **"Sao chép tất cả"** kèm thông báo Toast phản hồi.

6. **Section 6 – Footer (`Footer.astro`)**:
   - Bản quyền thương hiệu `© 2026 Beinbe Ginseng Slim`.
   - Quick Social Links dạng icon tròn.
   - Mini Hashtags tóm tắt.

---

## ⚙️ Cài Đặt & Khởi Chạy

### Yêu Cầu Môi Trường
- **Node.js**: Phiên bản `>= 22` (khuyến nghị Node 22+)
- **npm**: `>= 10`

### 1. Cài đặt Dependencies
```bash
npm install
```

### 2. Chạy Môi Trường Phát Triển (Development)
```bash
npm run dev
```
Trang web sẽ sẵn sàng tại `http://localhost:4321`.

### 3. Kiểm thử tự động (Unit Tests)
```bash
npm test
```
Kiểm tra tính hợp lệ của helper convert Google Drive, chuẩn hóa Social URL, tách Hashtag và cấu trúc dữ liệu Profile.

### 4. Build Production
```bash
npm run build
```
File tĩnh và worker Cloudflare sẽ được xuất vào thư mục `./dist`.

### 5. Preview Bản Build
```bash
npm run preview
```

### 6. Deploy lên Cloudflare
```bash
npm run deploy
```

---

## 📝 Hướng Dẫn Chỉnh Sửa Dữ Liệu Profile

Toàn bộ dữ liệu hồ sơ thương hiệu được tách biệt hoàn toàn khỏi mã nguồn hiển thị tại file:
📁 **`src/data/profile.ts`**

Ví dụ cấu trúc dữ liệu:
```typescript
export const profileData = {
  brand: {
    title_social_short: "Beinbe",
    title_social_long: "Beinbe Ginseng Slim",
    full_name: "Beinbe Ginseng Slim",
    first_name: "Beinbe",
    last_name: "Ginseng Slim",
    username: "beinbe.ritual"
  },
  description: {
    short: "01 gói mỗi ngày hỗ trợ quản lý vóc dáng...",
    long: "Ginseng Slim là thức uống chăm sóc vóc dáng..."
  },
  bio_html: '<a href="https://beinbe.com/">Beinbe Ginseng Slim</a>',
  hashtags: "#beinbe #ginsengslim #beinbeginsengslim #dailyslimritual #deptubentrong",
  contact: {
    email: "xinchao@beinbe.com",
    hotline: "0962975381",
    address: "Tầng 15, Tòa nhà Vincom Center, 72 Lê Thánh Tôn, TP. Hồ Chí Minh",
    google_maps: "Sẽ update sau"
  },
  media: {
    logo_500x500: "https://drive.google.com/file/d/...",
    background_1200x600: "https://drive.google.com/file/d/..."
  },
  personal_info: {
    gender: "Nữ",
    birthday: "06/10/1986"
  },
  social_links: {
    website: "https://beinbe.com/",
    business_site: "https://beinbe.com/business-info",
    facebook: "https://www.facebook.com/beinbe.ritual",
    instagram: "https://www.instagram.com/beinbe.ritual",
    twitter: "https://x.com/BeinbeGins2pu3",
    tiktok: "https://www.tiktok.com/@beinbe",
    youtube: "https://www.youtube.com/@BeinbeGinsengSlim",
    pinterest: "https://www.pinterest.com/beinberitual/",
    linkedin: "https://www.linkedin.com/in/beinbe-ginseng-slim/"
  }
};
```

---

## ➕ Cách Thêm Kênh Social Mới

1. Mở file `src/data/profile.ts`:
   - Thêm trường mới vào `SocialLinks` interface và `profileData.social_links` (Ví dụ: `threads: 'https://threads.net/@beinbe'`).
2. Mở file `src/components/SocialCard.astro`:
   - Thêm icon SVG của nền tảng vào phần template iconName.
3. Mở file `src/components/SocialGrid.astro`:
   - Thêm một item vào mảng `socialItems`:
   ```typescript
   {
     platform: 'threads',
     title: 'Threads',
     url: links.threads,
     handle: '@beinbe',
     isNew: true,
     iconName: 'threads'
   }
   ```
4. Chạy `npm test && npm run build` để kiểm tra.

---

## 🔍 Tối Ưu SEO & Hiệu Suất

- **Meta Tags:** Tiêu đề `<title>`, thẻ `<meta name="description">` và `<meta name="keywords">` chuẩn xác.
- **Canonical URL:** Tự động chỉ định `<link rel="canonical" href="https://beinbe.com/">`.
- **Open Graph & Twitter Cards:** Cung cấp đầy đủ `og:title`, `og:description`, `og:image`, `twitter:card="summary_large_image"` sử dụng trực tiếp ảnh bìa 1200x600.
- **Schema.org Structured Data (JSON-LD):** Nhúng schema dạng `Organization` chứa tên, mô tả, logo, toàn bộ 9 liên kết `sameAs`, contact point (hotline, email) và địa chỉ.
- **Tốc độ tải trang & Core Web Vitals:** Tối ưu preloading fonts, SVG inlined nhẹ nhàng, không phụ thuộc thư viện nặng ngoài, Lighthouse > 90.

---

## 🔄 Danh Sách Thay Đổi So Với Source Gốc

| Hạng mục | Source gốc (`beinbe-ritual`) | Source mới (`Profile Page`) |
|---|---|---|
| **Mục đích trang** | Template Astro Blog mặc định | Profile Page / Brand Landing Page chính thức của Beinbe |
| **Quản lý dữ liệu** | Hardcode phân tán | Tập trung tại `src/data/profile.ts` kèm kiểu TypeScript nghiêm ngặt |
| **Tiện ích chuyển đổi** | Chưa có | Thêm `src/utils/helpers.ts` tự động chuyển Drive Link sang direct link & chuẩn hóa URL |
| **Kênh Social** | 3 link mẫu (Mastodon, Twitter, GitHub) | **9 kênh chính thức** (bổ sung: Business Site, Twitter/X, YouTube, Pinterest, LinkedIn) |
| **Component mới** | Chỉ có BlogPost, FormattedDate | Bổ sung `ProfileHeader`, `AboutSection`, `ContactBlock`, `SocialCard`, `SocialGrid`, `HashtagList` |
| **Tính năng tương tác** | Không có | Copy Hashtags tương tác một chạm có toast thông báo, gọi điện/gửi email/mở Maps một chạm |
| **Bảng màu & Style** | Mặc định Bear Blog (xanh dương) | Bảng màu thương hiệu Beinbe (Xanh lá đậm, xanh lá tươi, cam) |
| **SEO & Schema** | Cơ bản | Bổ sung đầy đủ JSON-LD Organization Schema và Open Graph thương hiệu |
| **Kiểm thử tự động** | Không có test suite | Thêm `test/profile.test.mjs` với `node --test` |
