# Panduan Menambahkan Gambar ke Portfolio

## Struktur Folder Gambar

```
public/
├── profile.jpg          ← Foto profil Anda
└── projects/
    ├── snapsign/
    │   ├── 1.png        ← Gambar pertama (tampil di card)
    │   ├── 2.png        ← Gambar kedua (gallery modal)
    │   └── 3.png        ← dst...
    ├── asimetris/
    │   ├── 1.png
    │   └── 2.png
    └── chatterhand/
        ├── 1.png
        ├── 2.png
        └── 3.png
```

## Format Gambar yang Disarankan

| Jenis | Format | Ukuran |
|-------|--------|--------|
| Foto profil | JPG/PNG | 400×500px (ratio 4:5) |
| Screenshot proyek | PNG/JPG | 1200×675px (ratio 16:9) |

## Cara Menambah Gambar Proyek

1. Buat folder sesuai ID proyek di `public/projects/<id>/`
2. Namai file gambar: `1.png`, `2.png`, `3.png`, dst.
3. Update array `images` di `src/data/projects.ts`:

```ts
images: [
  "/projects/snapsign/1.png",
  "/projects/snapsign/2.png",
  "/projects/snapsign/3.png",
],
```

> Tambahkan sebanyak yang Anda mau — gallery modal mendukung navigasi ←→

## Cara Ubah Link Kontak

Edit file `src/data/personal.ts`:

```ts
linkedin: "https://www.linkedin.com/in/USERNAME-ANDA",
github:   "https://github.com/USERNAME-ANDA",
cvUrl:    "https://drive.google.com/file/d/...",
```

## Cara Ubah Judul Skripsi

Edit di `src/data/personal.ts`:

```ts
thesisTitle: "Judul Skripsi Anda",
thesisYear:  "2026",
```
