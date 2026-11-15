# Portfolio — Agung Putro Wicaksono

Website portofolio statis (HTML + CSS + JavaScript murni, tanpa build step) dengan dua bahasa (ID/EN) dan satu tema (dark).

## Struktur
- `index.html` — Beranda: Hero, Tentang, Keahlian, Proyek pilihan, Kontak (navbar: floating pill di desktop, bottom tab bar di tablet/mobile)
- `projects.html` — Detail daftar proyek
- `assets/css/style.css` — Design tokens, layout, animasi
- `assets/js/main.js` — Terjemahan, scroll-spy navbar, animasi scroll
- `assets/images/` — `photo1.jpg`, `photo2.jpg` (foto hover), `favicon.png`
- `assets/cv.pdf` — file CV untuk tombol Download CV (ganti dengan CV asli, nama file tetap `cv.pdf`)
- `assets/projects/` — `ecommerce-dashboard.jpg`, `corporate-landing.jpg`

## Yang perlu diganti
1. Letakkan foto & screenshot di folder `assets/` sesuai nama di atas (placeholder tampil otomatis bila belum ada).
2. Ganti `YOUR_ACCESS_KEY_HERE` (form, web3forms) di `index.html`, lalu timpa `assets/cv.pdf` dengan CV asli.
3. Ganti tautan `https://example.com` dengan URL proyek asli.

## Menjalankan
Buka `index.html` di browser, atau gunakan ekstensi Live Server / `python3 -m http.server`.
